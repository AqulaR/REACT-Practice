import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const isAuth = false;
  return <>
    <div className='theme'>Тема 30</div>
    <div className='exercise'>1:</div>
    {!isAuth && <p>пожалуйста, авторизуйтесь</p>}
  </>
}

export default App
