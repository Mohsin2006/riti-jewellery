import { ActionType } from "../constant/action_type";

export const addJewellery=(jewellery)=>{
return  {
type:ActionType.ADD_JEWELLERY,
payload:jewellery,}
}

export const selectedProduct=(jewellery)=>{
    return {type:ActionType.SELECTED_JEWELLERY,
           payload:jewellery,}
    }

export const removeJewellery=(id)=>{
    return{
    type:ActionType.REMOVE_JEWELLERY,
    payload:id,}
    }