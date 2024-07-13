import React from "react";

export default function Avatar({ name, imageUrl }) {
  return (
    <div className="border-[#806B77] border-2 rounded-full h-6 w-6 flex items-center justify-center">
      {imageUrl ? (
        <img src={imageUrl} alt="User's Avatar" />
      ) : (
        <>{name ? name[0] : null}</>
      )}
    </div>
  );
}
