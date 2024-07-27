import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'

function App() {
  return (
    <div  className='flex h-screen overflow-hidden'>
      <Left/>
      <Right/>
    </div>
  )
}

export default App