import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement | null>(null);

  const customRoutes: CustomRoute[] = [
    {
      path: "/",
      name: "Home",
      action: () => {
        pageRef.current?.scrollIntoView({ behavior: "smooth" });

        navigate("/");
      },
    },
    {
      path: "/about",
      name: "About",
      action: () => {
        pageRef.current?.scrollIntoView({ behavior: "smooth" });
        navigate("/about");
      },
    },
    {
      path: "/blogs",
      name: "Blogs",
      action: () => {
        pageRef.current?.scrollIntoView({ behavior: "smooth" });

        navigate("/blogs");
      },
    },
    {
      path: "/projects",
      name: "Projects",
      action: () => {
        pageRef.current?.scrollIntoView({ behavior: "smooth" });

        navigate("/projects");
      },
    },
  ];

  return { customRoutes, pageRef };
};

export default useNavigation;
