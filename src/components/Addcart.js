import React, { useContext } from "react"
import { StateContext } from "./Modal"


const Addcart = () => {
  let data = useContext( StateContext)
  console.log(data);
  return (
    <div>
      <h1>this is data{data}</h1>
    </div>
  )
}

export default Addcart
