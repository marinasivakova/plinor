import { useDispatch } from "react-redux";
import { useSpring, a } from "@react-spring/web";
import useMeasure from "react-use-measure";

import { ElementState, open } from "../../state/reducers/elementsStateReducer";

import { Content, Frame, Title, toggle } from "../../styles";
import * as Icons from "../Icons/Icons";
import { usePrevious } from "../../utils/usePrevious";

function Element({ element }: { element: ElementState }) {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(open(element));
  };

  const isOpen = element.open;
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });
  const Icon =
    Icons[`${element.children ? (element.open ? "Minus" : "Plus") : "Close"}`];

  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: element.children ? 1 : 0.3 }}
        onClick={onPress}
      />
      <Title>{element.name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div ref={ref} style={{ y }}>
          {element.open &&
            element.children?.map((el) => {
              return <Element key={el.name} element={el} />;
            })}
        </a.div>
      </Content>
    </Frame>
  );
}

export default Element;
