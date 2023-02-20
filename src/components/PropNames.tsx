import React from 'react'
import { Name } from '../model/Person.types'
type PropNamaes = {
    names : Name[]
}

export const PropNames = (props:PropNamaes) => {
  return (
    <div>
        {props.names.map((propname)=>{
            return (
                <h2 key={propname.first}>{propname.first} {propname.last}</h2>
            )
        })}
        </div>
  )
}
