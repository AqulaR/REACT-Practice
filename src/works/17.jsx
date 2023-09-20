import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const attr = 'block';

  return <>
    <div className='theme'>Тема 17</div>
    <div className='exercise'>1:</div>
    <div id={attr}>
      text
    </div>
  </>
}

export default App
