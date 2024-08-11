import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

function userGetAllusers() {
  const [allUsers, setAllUsers] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    const getUsers = async ()=>{
        try {
            const token = Cookies.get("jwt")
            const response = await axios.get("/api/user/allusers",{
                credentials:"include", // while passing cookies this must be kept included
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setAllUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.log("Error in useGetAllusers: "+error);
        }
    }
    getUsers(); // this is going to run when the page renders
  },[])
  return [allUsers,loading]
}

export default userGetAllusers;