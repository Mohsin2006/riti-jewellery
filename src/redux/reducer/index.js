import { combineReducers } from "redux";
import productReducer from "./reducer";
export const rootReducer=combineReducers({
products:productReducer
})