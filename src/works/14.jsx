import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const name = 'user, ';
  const age = '30';

  return <>
    <div className='theme'>Тема 14</div>
    <div className='exercise'>1:</div>
    <div>
      name: {name}
      age:  {age}
    </div>
  </>
}

export default App
