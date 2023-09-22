import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  function getDigitsSum(a) {
    let sum = 0;
    a = String(a);
    for (let i = 0; i < a.length; i++) {
      sum += Number(a[i]);
    }
		return sum;
	}
	
	const sum = getDigitsSum(123);
  return <>
    <div className='theme'>Тема 31</div>
    <div className='exercise'>1:</div>
    {sum}
  </>
}

export default App
