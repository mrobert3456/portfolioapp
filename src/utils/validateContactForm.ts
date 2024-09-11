export const validateForm = (data: ContactInformation) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let errors: string[] = [];
  let isValid = true;
  Object.entries(data).forEach(([key, value]) => {
    if (!value) {
      errors.push(`${key} field is missing!`);
      isValid = false;
    }

    if (key === "email" && !emailRegex.test(value)) {
      errors.push(`${key} is not in the correct format!`);
      isValid = false;
    }
  });

  return { isValid, errors };
};
