import React from 'react'
import { PersonProps } from '../model/Person.types'

export const Person = (props:PersonProps) => {
  return (
    <div>Firstname: {props.name.first} LastName: {props.name.last}</div>
  )
}
