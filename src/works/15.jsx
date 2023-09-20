import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const arr = [1, 2, 3, 4, 5];

  return <>
    <div className='theme'>Тема 15</div>
    <div className='exercise'>1:</div>
    <p>{arr[0]}</p>
		<p>{arr[1]}</p>
		<p>{arr[2]}</p>
		<p>{arr[3]}</p>
		<p>{arr[4]}</p>
  </>
}

export default App
