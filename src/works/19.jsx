import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;

  return <>
    <div className='theme'>Тема 18-19</div>
    <div className='exercise'>1:</div>
    {li1}
    {li2}
    {li3}
  </>
}

export default App
