import { ActionType } from "../constant/action_type";
const initialState={
    jewelery:[{
        name:"mohsin",
        category:"CEO"
    }],
};

export const jewelleryReducer=(state=initialState, {type,payload})=>{
switch (type) {
    case ActionType.ADD_JEWELLERY:
        return{...state.jewelery,payload}
        default :
        return state;

}
}

export const selectedProductReducer=(state={},{type,payload})=>{
    switch (type) {
        case ActionType.SELECTED_JEWELLERY:
         return {...state, ...payload}
        case ActionType.REMOVE_JEWELLERY:
            return {}                
        default:
            return state
    }
}

//         case UPDATE_JEWELLERY:
//         return{
//             ...state,
//             updatedJeweleryCollection:[...state.jeweleryCollection,action.payload]
//         };

//         case REMOVE_JEWELLERY:
//             return{
//                 ...state,
//                 removedJeweleryCollection:state.jeweleryCollection.filter(jewel=>jewel.id !== action.payload)
//             };
        
//     default:
//         return state;
// }
// }
// export default jewelleryReducer;