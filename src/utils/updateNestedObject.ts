import { ElementState } from "../state/reducers/elementsStateReducer";

export function updateNestedObjectInArr(
  arr: Array<ElementState>,
  obj: ElementState
) {
  return arr.map((el) => {
    if (el.name === obj.name) {
      const val = { ...obj };
      val.open = !val.open;
      return val;
    } else {
      if (el.children) {
        const children = updateNestedObjectInArr(el.children, obj);
        el.children = children;
      }
      return el;
    }
  });
}
