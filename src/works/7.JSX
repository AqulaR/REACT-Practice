import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  // 1
  return <>
    <div className='theme'>Тема 7</div>
    <div className='exercise'>1:</div>
    <div>
      hello
    </div>
    <div className='exercise'>2:</div>
    <div>
      <p>hello1</p>
      <p>hello2</p>
      <p>hello3</p>
    </div>
    <div className='exercise'>3:</div>
    <div>
      <p className='paragraph'>hello1</p>
      <p className='paragraph'>hello2</p>
      <p className='paragraph'>hello3</p>
    </div>
  </>
}

export default App
