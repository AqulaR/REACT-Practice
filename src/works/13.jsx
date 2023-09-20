import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const str1 = 'text1';
  const str2 = 'text1';

  return <>
    <div className='theme'>Тема 13</div>
    <div className='exercise'>1:</div>
    <div>
      <p>{str1}</p>
      <p>{str1}</p>
    </div>;
  </>
}

export default App
