import React from 'react'

import { useRef, useEffect } from 'react'


export const DomRef = () => {
  
const inputRef = useRef<HTMLInputElement>(null) 
//if we are sure that our inputRef will never be null while on focus, 
        //we can use useRef<HTMLInputElement>(null!) 

useEffect(()=>{
inputRef.current?.focus()  //This focus the HTML element with ref={inputRef} when the component renders
},[])

//if we are using useRef<HTMLInputElement>(null!)
                          //inputRef.current?.focus() can be inputRef.current.focus()
                          // we can use .curent.focus() instead of .current?.focus() 


return   (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
  )
}
