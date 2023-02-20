import React from 'react'

type StatusProps = {
    status : "loading" | "success" | "error"
}

export const Status = (props:StatusProps) => {
  
 let message  
 
 if (props.status === "loading"){
            message = props.status
      
     
 } else  if (props.status === "success"){
 
 message = props.status
   
 } else  if (props.status === "error"){
  message = props.status
 }
  return (
    <div>
         Status - {message}
    </div>
)
  

 }

