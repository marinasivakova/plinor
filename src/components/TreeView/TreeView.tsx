import Element from "../Element/Element";
import { Frame } from "../../styles";
import { ElementState } from "../../state/reducers/elementsStateReducer";

function TreeView({ elements }: { elements: Array<ElementState> }) {
  const elementsToRender = elements.map((el) => {
    return <Element key={el.name} element={el} />;
  });

  return (
    <Frame
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Frame
        style={{ border: "1px solid", borderRadius: "5px", padding: "10px" }}
      >
        {elementsToRender}
      </Frame>
    </Frame>
  );
}

export default TreeView;
