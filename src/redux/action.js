import { SEARCH_DATA } from "./actionType"

export const searchData = (data) => {
    return ({type:SEARCH_DATA,payload:data})
}