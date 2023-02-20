import React from 'react';
import './App.css';
import Greet from './components/Greet';
import { Person } from './components/Person';
import { PropNames } from './components/PropNames';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './state/LoggedIn';
import { User } from './state/User';
import { ReducerExample } from './state/ReducerExample';

import { ThemeContextProvider } from './context/ThemeContext';
import { Box } from './context/Box';

import { UserContextProvider } from './context/UserContext';
import  UserFromContext from './context/User';

import { DomRef } from './ref/DomRef';

import { MutableRef } from './ref/MutableRef';


import { Private } from './auth/Private';
import { Profile } from './auth/Profile';

import { List } from './generics/List';

function App() {
const person_name = {
  first: "Kolahalan",
  last: "R",
}

const names_array = [{
first: "Rangan",
  last: "K",
},{
  first: "Bala",
  last: "L",
},
{
  first: "Kishore",
  last: "K",
}
]

const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id:number)=>{
      console.log("event : ",event)
      console.log(" id : ",id)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
      console.log(event.target.value)
    }

  return (
    <>
    <Person name={person_name}  />  
    <Greet name="Kolahalan" messageCount={0} isLoggedin={false}/>
    <PropNames names={names_array}/>
    <Status status='success'/>
    <Heading>This line is added</Heading>
    <Oscar>
      <Heading>
        Leo gets Oscar
      </Heading>
    </Oscar>

    <Button handleClick={handleClick}/>
    <Input  handleChange={handleChange}/>
    <Container styles={{border: '1px solid black',  padding: "1rem", textAlign: "center"}}/>
   <LoggedIn/>
   <User/>
   <ReducerExample/>

   <div className='App'>
    <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider>
   </div>

   <div className='App'>
    <UserContextProvider>
      <UserFromContext/>
    </UserContextProvider>
   </div>

   <DomRef/>

   <MutableRef/>

    <div className='App'>
      <Private isLoggedIn={true} Component={Profile}/>
      {/* Passing Components as Props. Here, the entire component Profile is passed as Prop to Private */}
    </div>

    <div className='App'>
      {/* <List items={['ÁntMan','Shrek','Super Man']} onClick={(item)=>console.log(item)}/>
      <List items={[1,2,3,4]} onClick={(item)=>console.log(item)}/> */}
      <List items={[{
        id:1,
        first: 'Bruce',
        last: 'Wayne',
      },{
        id:2,
                first: 'Martha',
        last: 'Wayne',
      }]} onClick={(item)=>console.log(item)}/>
    </div>

    </>
  );
}

export default App;
