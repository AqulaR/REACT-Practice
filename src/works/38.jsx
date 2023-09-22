import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const arr = [];

  for (let i = 1; i <= 5; i++) {
    arr.push(<li>{i}</li>);
  }

  return <>
    <div className='theme'>Тема 38</div>
    <div className='exercise'>1:</div>
    <ul>
      {arr}
    </ul>
  </>
}

export default App
