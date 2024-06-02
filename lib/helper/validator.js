import validator from "validator";
export const validate = (data, type, tag) => {
  let err = [];

  if (validator.isEmpty(data)) {
    err.push(`${tag} cannot be blank`);
  } else {
    if (!validator.isAscii(data)) {
      err.push(`${tag} contains invalid characters`);
    }
    if (type === "email" && !validator.isEmail(data)) {
      err.push(`${tag} is invalid`);
    }
  }

  //isAscii(str)
  // isEmail(str [, options])
  // isEmpty(str [, options])
  return { ok: err == 0, data: err };
};
