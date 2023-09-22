import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const users = [
    {
      id: 1,
      name: 'user1',
      surn: 'surn1',
      age: 30
    },
    {
      id: 2,
      name: 'user2', 
      surn: 'surn2', 
      age: 31
    },
    {
      id: 3,
      name: 'user3', 
      surn: 'surn3', 
      age: 32
    },
  ];

  const res = users.map(function (item) {
    return <ul><li key={item.id}>{item.name}</li><li key={index}>{item.surn}</li><li key={index}>{item.age}</li></ul>;
  });

  return <>
    <div className='theme'>Тема 42</div>
    <div className='exercise'>1:</div>
    <ul>
      {res}
    </ul>
  </>
}

export default App
