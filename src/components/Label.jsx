import React from 'react';

const Input = (props) => {
  return (
    <label htmlFor={props.htmlFor} className={props.className}> {props.children} </label>
  )
}
export default Input;