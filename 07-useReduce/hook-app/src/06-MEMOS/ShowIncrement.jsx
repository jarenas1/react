import React, { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {
    console.log("aaaña");
    
  return (
    <>
        <button className='btn btn-primary' onClick={()=>{increment(5)}}>INCREMENT</button>
    </>
  )
})
