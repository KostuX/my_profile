import Hexagon from "../../components/hexagon";
import list from "../../public/hex logo/list";
import useWindowDimensions from "../../lib/helper/windowSize";

export const arangeHex = () => {
  let [windowWidth, windowHeight] = useWindowDimensions();

  let totLength = list().length;
  let rows = [];
  let row = [];

  let itemsPL = Math.floor(windowWidth / 90 - 1);

  for (let i = 0; i < totLength; i++) {
    let _itemsPL = itemsPL;

    if (rows.length % 2 != 0) {
      _itemsPL = itemsPL - 1;
    }

    row.push(
      <span key={i} className="hover:scale-125 transition-all duration-1000">
        <Hexagon size={80} image={"/logos/" + list()[i]} />
      </span>
    );

    if (row.length == _itemsPL - 1) {
      rows.push(row);
      row = [];
    }
  }
  rows.push(row);

  return (
    <div className="mx-12">
      {rows.map((e, i) => (
        <div key={i} className={i % 2 == 0 ? "flex  " : "flex mx-12 "}>
          {e}
        </div>
      ))}
    </div>
  );
};
