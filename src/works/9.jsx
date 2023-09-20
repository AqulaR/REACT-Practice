import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  return <>
    <div className='theme'>Тема 9</div>
    <div className='exercise'>1:</div>
    <div>ul не стоял за return либо не был в контейнере "{`<></>`}" </div>
    <ul>
			<li>text1</li>
			<li>text2</li>
			<li>text3</li>
		</ul>;
  </>
}

export default App
