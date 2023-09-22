import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const isAuth = true;
  return <>
    <div className='theme'>Тема 29</div>
    <div className='exercise'>1:</div>
    {isAuth && <p>вы авторизованы</p>}
  </>
}

export default App
