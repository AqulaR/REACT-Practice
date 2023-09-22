import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  let admin;
  const isAdmin = true;
  if (isAdmin) {
		admin = <div><p>yes</p></div>;
	}
  return <>
    <div className='theme'>Тема 27</div>
    <div className='exercise'>1:</div>
    {admin}
  </>
}

export default App
