import {text} from "../Actions/Actiontype"
const initialState = {
  text: "Text Here",
  design: "/Images/Designs/des_4.png",
  color: "black",
  textSize: "32",
  textColor: "white",
  fontFamily: "Oleo Script",
  border: true
};
export const settingsreducer = (state=initialState, action) => {
  switch (action.type) {
      case text:
       return action.payload;
       default:
       return state  
  }
}