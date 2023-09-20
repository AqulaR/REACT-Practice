import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const items = (<>
    <li>text1</li>
    <li>text2</li>
    <li>text3</li>
  </>
  );

  return <>
    <div className='theme'>Тема 20</div>
    <div className='exercise'>1:</div>
    <ul>
      {items}
    </ul>
  </>
}

export default App
