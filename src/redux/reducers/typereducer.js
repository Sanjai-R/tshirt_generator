import { type } from "../Actions/Actiontype";

export const typereducer = (state = "design", action) => {
  switch (action.type) {
    case type:
      return action.payload;
    default:
      return state;
  }
};
