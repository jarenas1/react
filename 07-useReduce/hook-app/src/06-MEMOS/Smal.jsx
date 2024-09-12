import { memo } from "react";

export const Smal = memo(({value}) => {
    console.log("renderized");
    
  return (
    <small>{value}</small>
  )
})


