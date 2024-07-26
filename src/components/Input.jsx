// import React from "react";

const Input = ({
  type,
  id,
  name,
  placeholder,
  className,
  register,
  required,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      {...register(name, { required })}
      className={`${className} mt-1 px-3 py-2 bg-[#eaecee] border-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm border-[#C4BAC0] placeholder:text-[#9FA7AF]`}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
