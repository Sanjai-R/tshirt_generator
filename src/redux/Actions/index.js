import {text,type} from "./Actiontype"
export const getDesign =(data) => {
    console.log(data)
    return {
        type:text,
        payload:data
    }
}
export const getType = (data) => {
    return {
        type:type,
        payload:data
    }
}