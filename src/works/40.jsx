import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const arr = ['a', 'b', 'c', 'd', 'e'];

  const res = arr.map(function(item, index) {
		return <li key={index}>{item}</li>;
	});

  return <>
    <div className='theme'>Тема 40</div>
    <div className='exercise'>1:</div>
    <ul>
      {res}
    </ul>
  </>
}

export default App
