import React from 'react';
import Template from './components/Template';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
let nextId = 4;
function App() {
  // 토글함수
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);
  // setInsertToggle의 이전 불리언 값을 바꿔줌
  const onInsertToggle = () => {
    setInsertToggle(prev=> !prev)
  }
  const onInsertTodo = text => {
    if(text === "") {
      return alert("할 일을 입력해주세요.")
    } else {
      const todo= {
        id: nextId,
        text,
        checked : false
      }
      //concat 함수 설정 이유 : 새배열이 리턴되고, 기존배열 변경x(push는 변경)
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };
  //체크되도록 기능 구현(만약 id가 같다면 checked의 불리언값 반대, id 다르면 todo반환)
  const onCheckToggle =(id) => {
    setTodos(todos => 
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked }: todo
        )
    );
  }
  return (
  <Template todoLength={todos.length}> 
    {/* todoList에 있는 todos 배열을 받아준다. */}
    <TodoList todos={todos} onCheckToggle={onCheckToggle} />
    {/* 버튼이 클릭했을때 토글이 나온다. */}
    <div className="add-todo-button" onClick={onInsertToggle}>
      <MdAddCircle/>
    </div>
    {/* insertToggle이 true일때만 todoInsert 실행 */}
    {insertToggle && 
    <TodoInsert 
    onInsertToggle = {onInsertToggle}
    onInsertTodo = {onInsertTodo}
    />}
  </Template>
  );
};

export default App;
