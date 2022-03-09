import React from "react";
import TodoItem from './TodoItem';
//todos는 할일 객체가 들어있는 배열을 만들어줌
const TodoList = ({todos, onCheckToggle}) => {
    return (
    <div className="TodoList">
        {todos.map(todo => (
        <TodoItem todo = {todo} key={todo.id} onCheckToggle={onCheckToggle}/>
    ))}
    </div>);
}
export default TodoList;