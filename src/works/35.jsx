import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
	function show1(evt) {
		console.log(evt);
	}

  function show2(evt) {
		console.log(evt.target);
	}

  return <>
    <div className='theme'>Тема 35</div>
    <div className='exercise'>1:</div>
    <button onClick={show1}>act1</button>
    <div className='exercise'>2:</div>
		<button onClick={show2}>act2</button>
  </>
}

export default App
