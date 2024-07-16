import { data } from "../server/data";
import { ElementState } from "../state/reducers/elementsStateReducer";

export const storage = window.localStorage;
export function writeToStorage() {
  const state = storage.getItem("state");
  if (!state) {
    const initialData: ElementState[] = data.map((el) => {
      const newEl: ElementState = el;
      newEl.open = false;
      return newEl;
    });
    storage.setItem("state", JSON.stringify(initialData));
  }
  return JSON.parse(storage.getItem("state") as string);
}
