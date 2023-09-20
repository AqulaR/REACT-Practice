import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const obj = {
    name: 'john',
    surname: 'smit'
  };

  return <>
    <div className='theme'>Тема 16</div>
    <div className='exercise'>1:</div>
    <p>
      name:    <span>{obj.name}</span>,<br/>
      surname: <span>{obj.surname}</span>,
    </p>
  </>
}

export default App
