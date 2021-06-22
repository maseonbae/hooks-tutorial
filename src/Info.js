import React, {useState, useEffect} from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  /*
   useEffect: 렌더링 끝나고 실행
   2번째 파라미터에 변화를 감지할 변수를 작성
   2번째 파라미터가 비어 있다면 마운트 때만 실행
   */
  useEffect(() => {
    console.log("effect");
    console.log(nickname);

    // 리턴값은 cleanup 함수: 업데이트 되기 전, 언마운트 때 실행
    return () => {
      console.log("cleanup");
      console.log(nickname);
    };
  }, [nickname]);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={name} onChange={handleChangeName}/>
        <input type="text" value={nickname} onChange={handleChangeNickname}/>
      </div>
      <div>
        <div>
          <strong>이름:</strong> {name}
        </div>
        <div>
          <strong>닉네임:</strong> {nickname}
        </div>
      </div>
    </>
  );
};

export default Info;