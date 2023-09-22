import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  let age;
  const isAdult = false;
  if (isAdult) {
		age = <p>more 18</p>;
	}
  else {
		age = <p>not more 18</p>;
  }
  return <>
    <div className='theme'>Тема 25-26</div>
    <div className='exercise'>1:</div>
    {age}
  </>
}

export default App
