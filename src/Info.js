import React, {useState} from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

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