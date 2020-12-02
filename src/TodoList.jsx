import React from "react";

const TodoListItem = ({ todo, removeTodo, doneTodo }) => {
  // [ここを実装する]
  // 1. Todoを表示する
  // 2. Todoの削除をするボタンがあり、それをクリックするとremoveTodを呼び出す
  // 3. Todoを完了するボタンがあり、それをクリックするとdoneTodを呼び出す
  return null;
};

const TodoList = ({ todoList, removeTodo, doneTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          doneTodo={doneTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
