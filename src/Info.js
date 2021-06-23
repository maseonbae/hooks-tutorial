import React from 'react';
import useInputs from "./useInput";

const Info = () => {
  const [state, handleChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input type="text" name="nickname" value={nickname} onChange={handleChange} />
      </div>
      <div>
        <strong>이름:</strong> {name}
      </div>
      <div>
        <strong>닉네임:</strong> {nickname}
      </div>

    </div>
  );
}

export default Info;
