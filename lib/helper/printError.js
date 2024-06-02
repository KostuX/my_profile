export const printError = (err, props) => {
  // TODO: check if it is array, if not wrap it as array
  let response = [];

  err.forEach((e, index) => {
    response.push(
      <span
        key={index}
        className="block"
        style={{ color: "red", fontSize: "20px" }}
      >
        {e}
      </span>
    );
  });

  let errMsg = err.join("\n");
  return response;
};
