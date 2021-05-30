import { ActionTypes } from "../constants/action-type";
const intialState = {
  products: [{
    id:1,
    title:'Dipesh',
    category:'progrmeer'
  }],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
