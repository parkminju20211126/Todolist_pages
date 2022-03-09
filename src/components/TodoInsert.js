import React from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.css";
import { useState } from "react";

const TodoInsert = ({onInsertToggle, onInsertTodo }) => {
    const [value, setValue] = useState("");
    //변화가 일어나게 하려구..value를 설정
    const onChange = (e) => {
        setValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle(); //창닫기
    }
    return <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={onSubmit}>
            <input placeholder="please type" 
            value={value} 
            onChange={onChange}
            ></input>
            <button type="submit">
                <MdAddCircle/>
            </button>
        </form>
    </div>;
}
export default TodoInsert;