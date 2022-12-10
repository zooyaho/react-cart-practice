import React from "react";
import classes from "./Input.module.css";

// 사용자 지정 컴포넌트에서 ref를 작동하기 위해 React.forwardRef()사용
const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
