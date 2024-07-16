import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import { Frame } from "./styles";
import TreeView from "./components/TreeView/TreeView";

function App() {
  const elements = useSelector((state: RootState) => state.elements.state);
  return (
    <Frame
      style={{
        fontFamily: " Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        lineHeight: " 1.5",
        fontWeight: "400",
      }}
    >
      <TreeView elements={elements} />
    </Frame>
  );
}

export default App;
