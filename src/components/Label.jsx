import React from 'react';

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} className="block text-[#212D3A] text-sm mb-1 font-medium"> {props.children} </label>
  )
}
export default Label;