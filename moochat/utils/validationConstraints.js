import { validate } from "validate.js";

export const validateString = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    constraints.format = {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain letters",
    };

    const validationResult = validate({ [id]: value }, { [id]: constraints });

    return validationResult && validationResult[id];
  }
};

export const validateEmail = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    constraints.email = true;
  }

  const validationResult = validate({ [id]: value }, { [id]: constraints });

  return validationResult && validationResult[id];
};
