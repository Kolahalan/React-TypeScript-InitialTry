import React from 'react'

type InputProps = {
    value?: string //May or maynot be passed in as prop
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

export const Input = ({ value, handleChange }: InputProps) => {
 //If it is not passed inprops, its default value is ""
  return (
    <input type="text" value={value} onChange={handleChange} placeholder="Type your text here"/>
  )
}
