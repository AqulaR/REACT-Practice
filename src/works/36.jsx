import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  function func(arg1, arg2, event) {
    console.log(arg1, arg2, event);
  }

  function func2(event, arg1, arg2) {
    console.log(event, arg1, arg2);
  }

  function func3(arg1, event, arg2) {
    console.log(arg1, event, arg2);
  }

  return <>
    <div className='theme'>Тема 36</div>
    <div className='exercise'>1:</div>
    <p>При клике на кнопку у нас передаётся onClick evt с аргументом</p>
    <div className='exercise'>2:</div>
    <button onClick={event => func('eee', 'fff', event)}>act</button>
    <div className='exercise'>3:</div>
    <button onClick={event => func2(event, 'eee', 'fff')}>act</button>
    <div className='exercise'>4:</div>
    <button onClick={event => func2('eee', event, 'fff')}>act</button>
  </>
}

export default App
