import {useReducer} from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const handleChange = e => {
    dispatch(e.target);
  }
  return [state, handleChange];
}
