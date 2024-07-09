import React from 'react';

const Input = (props) => {
  return (
    <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} {...register(label, {required})} className={`${props.className} mt-1 px-3 py-2 bg-[#eaecee] border-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]`} />
  )
}
export default Input;