import React from 'react'

export default function Avatar({ url, name}) {
  return (
    <div className='border-black border-2 rounded-full h-24 w-24 flex items-center justify-center'>
      {url ? (
        <img src={url} alt="User's Avatar" />
      ):
      (
        <>{name[0]}</>
      )}
    </div>
  )
}
