export default function Hexagon({ size, props, image }) {
  let height = size;
  let width = height * 1.15;

  return (
    <div
      style={{
        height: height,
        width: width,
        overflow: "hidden",
        transform: "rotate(-30deg)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          transform: "rotate(60deg)",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            height: "100%",
            width: "100%",
            transform: "rotate(-120deg)",
            backgroundColor: "lightgrey",
            borderStyle: "solid",
          }}
        >
          <img
            style={{
              transform: "rotate(90deg)",
              overflow: "hidden",
              height: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={`${image}`}
            alt="image description"
          ></img>
        </div>
      </div>
    </div>
  );
}
