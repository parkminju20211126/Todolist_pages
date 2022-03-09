import React from 'react';
import './Template.css'
//template 안에있는 컴포넌트를 children으로 받아줌
const Template = ({children, todoLength}) => {
    return (
        <div className="Template">
            <div className="title">오늘의 할일 {todoLength}</div>
            <div>{children}</div>
        </div>
    );
};

export default Template;