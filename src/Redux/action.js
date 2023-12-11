import axios from "axios";

import { ERROR, LOADING, SUCCESS } from "./actionTypes"

export const createLoadingAction = ()=>{
    return {
        type : LOADING
    }
}

export const createSuccessAction = (payload)=>{
    return {
        type : SUCCESS,
        payload
    }
}

export const createErrorAction = ()=>{
    return {
        type : ERROR,
    }
}



export const getData = async (dispatch) => {
    try {
      dispatch(createLoadingAction());
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch(createSuccessAction(res.data));
    } catch (error) {
      dispatch(createErrorAction());
    }
  };