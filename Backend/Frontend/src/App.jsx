import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import { useAuth } from './context/Authprovider'
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
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
        <Route path="/signup" element={authUser? <Navigate to="/"/> : <Signup/>}/>
      </Routes>
      <Toaster />
    </>

  )
}

export default App