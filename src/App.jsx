import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LoginComponent from './assets/components/loginComponent/LoginComponent'
import HeaderComponent from './assets/components/headerComponent/HeaderComponent'
import MyListComponent from './assets/components/list/MyListComponent'

function App() {
  const list = [
    { id: "uno", name: "Pino" },
    { id: "due", name: "Gino" },
    { id: "tre", name: "Mino" }
  ]; //array di oggetti
  
  const Objectlist = {
    primo: { id: "uno", name: "Pino" },
    secondo: { id: "due", name: "Gino" },
    terzo: { id: "tre", name: "Mino" }
  }; //oggetto di oggetti
  /* const Objectlist = 
    { id: "uno", name: "Pino" } //oggetto di oggetti */
     console.log(Objectlist)
     //console.log(...Objectlist)

     let spesa = {
      1: "formaggio",
      2: "carne",
      3: "avocado"
     }

     console.log({...spesa})
     spesa = {...spesa,
      nuoviId: "arbitrario"
    }
    console.log({...spesa})
    console.log(...Object.keys(spesa))
    console.log(...Object.values(spesa))
 

  return (
    <>
    
    <h1>Questo è il Componente App() (padre)</h1>
      <HeaderComponent title="Componente child: Header - child di App - richiamato da App()"/>
      <LoginComponent />
      <MyListComponent listElements={list} />
     {/*  <MyListComponent listElements={Objectlist} /> */}
    </>
  );
}

export default App
