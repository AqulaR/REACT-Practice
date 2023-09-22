import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const arr = [
		<li>1</li>,
		<li>2</li>,
		<li>3</li>,
		<li>4</li>,
		<li>5</li>,
	];

  return <>
    <div className='theme'>Тема 37</div>
    <div className='exercise'>1:</div>
    {arr}
  </>
}

export default App
