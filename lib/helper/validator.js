import validator from "validator";
export const validate = (data, type, tag, min, max) => {
  let err = [];
  let lenLimit = { min: min, max: max };

  if (validator.isEmpty(data)) {
    err.push(`${tag} cannot be blank`);
  } else {
    if (!validator.isLength(data, lenLimit)) {
      err.push(
        `${tag} must be between ${lenLimit.min} and ${lenLimit.max} characters`
      );
    }
    if (!validator.isAscii(data)) {
      err.push(`${tag} contains invalid characters`);
    }
    if (type === "email" && !validator.isEmail(data)) {
      err.push(`${tag} is invalid`);
    }
  }
  //isLength(str [, options])
  //isAscii(str)
  // isEmail(str [, options])
  // isEmpty(str [, options])
  return { ok: err == 0, data: err };
};
