import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const age = 19;
  return <>
    <div className='theme'>Тема 28</div>
    <div className='exercise'>1:</div>
    {age > 18 ? 'more 18' : 'less 18'}
  </>
}

export default App
