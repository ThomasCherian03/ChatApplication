import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import Signup from './compopnents/Signup'
import Login from './compopnents/Login'
import { useAuth } from './context/Authprovider'
import { Navigate, Route, Routes } from "react-router-dom"

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <Routes>
      <Route path="/" element={
        authUser ? (
          <div  className='flex h-screen overflow-hidden'>
            <Left/>
            <Right/>
          </div>
        )
          :
        (
          <Navigate to={"/login"}/>
        )
      }/>
      <Route path="/login" element={ authUser? <Navigate to="/"/> : <Login/>}/>
      <Route path="/signup" element={authUser? <Navigate to="/"/> :<Signup/>}/>
      
    </Routes>

  )
}

export default App