import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numbers => {
  console.log("평균값 계산중..");
  const cntNumbers = numbers.length;
  if (cntNumbers === 0) {
    return 0;
  }

  const sum = numbers.reduce((a, b) => a + b);
  return sum / cntNumbers;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);  // ref명과 초기 연결 엘리먼트 지정?

  const handleChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 두번째 파라미터가 없으면 처음 렌더링 때

  const handleClick = useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus(); // current: inputEl에 지금 연결된 엘리먼트
  }, [number, list]);

  // 두번째 파라미터로 변화를 감지할 변수를 지정
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={handleChange} ref={inputEl}/>
      <button onClick={handleClick}>등록</button>
      <ul>
      {list.map((value, idx) => (
         <li key={idx}>{value}</li>
      ))}
      </ul>
      <div>
        <strong>평균값:</strong> {avg}
      </div>
    </div>
  );
}

export default Average;