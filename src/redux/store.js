import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./moneySlice";

export default configureStore({
  reducer: { money: moneyReducer },
});
