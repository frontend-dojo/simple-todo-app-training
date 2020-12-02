import React, { useState } from "react";

const NewTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const onChangeInput = (event) => {
    setInput(event.target.value);
  };
  const onSubmit = (e) => {
    // [ここを実装する]
    // 1. フォームのデフォルトの送信動作を抑制する
    // 2. addTodoを入力内容を引数にして呼び出す
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" value={input} onChange={onChangeInput} />
        <button type="submit">追加</button>
      </div>
    </form>
  );
};

export default NewTodo;
