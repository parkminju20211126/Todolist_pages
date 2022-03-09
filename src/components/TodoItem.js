import React from "react";
import { MdCheckBox,MdCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoItem.css";
//todo 객체에서 text 가져오기
const TodoItem = ({todo, onCheckToggle, onInsertToggle}) => {
    const {id, text, checked} = todo;
    return (
    <div className="TodoItem">
         {/* checked하면 chedcked 함, 아니면 빈문자열 */}
        <div className={`content ${checked ? "checked" : ""}`}>
          {checked ? <MdCheckBox
          onClick={()=> {
              onCheckToggle(id);
          }}/> : <MdCheckBoxOutlineBlank
          onClick={()=> {
            onCheckToggle(id);
        }}/>}
          <div className="text" onClick={()=> {
            onInsertToggle();
          }}>{text}</div>
        </div>  
    </div>);
};
export default TodoItem;