import React, {useReducer} from "react";

// reducet 함수는 새로운 상태(state)를 반환
function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return {value: state.value + 1};
  } else if (action.type === "DECREMENT") {
    return { value: state.value - 1};
  } else {
    return state;
  }
}

const Counter = () => {
  // useReducer 첫번째 파라미터에는 reducet 함수
  // 두번째 파라미터에는 state의 변수명 및 기본값
  const [state, dispatch] = useReducer(reducer, {value: 0});

  return (
    <>
      <p>
        현재 카운터 값은 <strong>{state.value}</strong>입니다.
      </p>
      { /* dispatch 함수*/ }
      <button onClick={() => dispatch({type: "INCREMENT"})}>+1</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>-1</button>
    </>
  );
};

export default Counter;