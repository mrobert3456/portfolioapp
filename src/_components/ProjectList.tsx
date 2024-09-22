import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    if (!repositories) {
      setIsLoading(true);
      fetch("https://api.github.com/users/mrobert3456/repos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response: Response) => response.json())
        .then((data: Repository[]) => {
          setRepositories(
            data
              .filter((item: Repository) => item.description !== null)
              .sort((a: Repository, b: Repository) => {
                const aDate = new Date(a.created_at).getTime();
                const bDate = new Date(b.created_at).getTime();
                return bDate - aDate;
              })
          );
          setIsLoading(false);
        })
        .catch((error: Error) => {
          console.log(error.message);
          setIsLoading(false);
          setError(error);
        });
    }
  }, []);

  return (
    <Stack>
      {!error && isLoading && (
        <Flex className="gap-2">
          <Text>Loading... </Text>
          <Spinner />
        </Flex>
      )}
      {error && !isLoading && <Stack>{error?.message}</Stack>}

      {!error &&
        !isLoading &&
        repositories &&
        repositories?.map((repo: Repository) => (
          <ProjectListItem key={repo.id} repository={repo} />
        ))}
    </Stack>
  );
};

export default ProjectList;
