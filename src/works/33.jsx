import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
	function show1() {
		alert(1);
	}
	
	function show2() {
		alert(2);
	}
	
  return <>
    <div className='theme'>Тема 33</div>
    <div className='exercise'>1:</div>
    <button onClick={show1}>act1</button>
		<button onClick={show2}>act2</button>
  </>
}

export default App
