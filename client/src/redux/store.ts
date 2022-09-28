import { configureStore } from "@reduxjs/toolkit";
import wikidogs from "./slice";

export default configureStore({
  reducer: {
    wikidogs: wikidogs,
  },
});
