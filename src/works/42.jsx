import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const users = [
    {
      name: 'user1', surn: 'surn1', age:
        30
    },
    {
      name: 'user2', surn: 'surn2', age:
        31
    },
    {
      name: 'user3', surn: 'surn3', age:
        32
    },
  ];

  const res = users.map(function (item, index) {
    return <ul><li key={index}>{item.name}</li><li key={index}>{item.surn}</li><li key={index}>{item.age}</li></ul>;
  });

  return <>
    <div className='theme'>Тема 41</div>
    <div className='exercise'>1:</div>
    <ul>
      {res}
    </ul>
  </>
}

export default App
