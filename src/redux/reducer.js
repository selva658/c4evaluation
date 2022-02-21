import { SEARCH_DATA } from "./actionType";

const init = {
    data:[]
}
export const reducer = (state=init,action) => {
    switch (action.type) {
        case SEARCH_DATA: return ({ ...state, data: [...state.data, action.payload] })
        default :return state
    }
}