import { configureStore } from "@reduxjs/toolkit";
import nameList from "./nameSlice";

export default configureStore({
  reducer: {
    nameList: nameList,
  },
});
