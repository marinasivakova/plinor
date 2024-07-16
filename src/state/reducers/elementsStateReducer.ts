import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Element } from "../../server/data";
import { updateNestedObjectInArr } from "../../utils/updateNestedObject";
import { storage, writeToStorage } from "../../utils/writeToStorage";

export interface ElementState extends Element {
  open?: boolean;
}

export interface ElementsState {
  state: Array<ElementState>;
}

const initialState: ElementsState = {
  state: writeToStorage(),
};

export const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    open(state, action: PayloadAction<ElementState>) {
      state.state = updateNestedObjectInArr(state.state, action.payload);
      storage.setItem("state", JSON.stringify(state.state));
    },
  },
});

export const { open } = elementsSlice.actions;
export default elementsSlice.reducer;
