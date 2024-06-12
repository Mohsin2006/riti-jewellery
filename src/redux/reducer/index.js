import { combineReducers } from "redux";
import { jewelleryReducer, selectedProductReducer } from "./reducer";
import { removeJewellery } from "../action/action";

export const reducer=combineReducers({
allJewellery:jewelleryReducer,
selectedProduct:selectedProductReducer,
removeJewellery:removeJewellery
})