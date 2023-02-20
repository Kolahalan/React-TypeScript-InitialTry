import React from 'react'

type MyProps = {
    children: React.ReactNode
}

export const Oscar = (props:MyProps) => {
  return (
    <div>This is typed inside Oscar. 
       This is received Prop : {props.children}</div>
  )
}