import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const num1 = 3;
  const num2 = 2;

  const name = 'john';
  const surname = 'smit';

  const num = 4;

  return <>
    <div className='theme'>Тема 24</div>
    <div className='exercise'>1:</div>
    result: {num1 ** num2}
    <div className='exercise'>2:</div>
    result: {name + ' ' + surname}
    <div className='exercise'>3:</div>
    result: {Math.sqrt(num)}
  </>
}

export default App
