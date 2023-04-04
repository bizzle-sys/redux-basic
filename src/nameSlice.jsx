import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  formDt: "",
  listDt: [],
};
const nameSlice = createSlice({
  name: "naam",
  initialState: initialState,
  reducers: {
    setformDt: (state, action) => {
      state.formDt = action.payload;
    },
    setlistDt: (state, action) => {
      state.listDt = [...state.listDt, state.formDt];
    },
  },
});
const { reducer, actions } = nameSlice;
export const { setformDt, setlistDt } = actions;
export default reducer;
