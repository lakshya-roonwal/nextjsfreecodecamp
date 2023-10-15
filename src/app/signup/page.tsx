"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { axios } from "axios"



const SignupPage = () => {
  const [user,setUser]=React.useState({
    email:"",
    password:"",
    username:""
  })
  const onSignup=async()=>{

  }

  return (
    <div className="flex flex-col items-center justify-center min-hscreen py-2">
      <h1 className="text-2xl">Signup </h1>
      <br />
      <label htmlFor="username">Username</label>
      <input className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
      type="text" 
      name="username" 
      id="username" 
      onChange={(e)=>{
        setUser({...user,username:e.target.value})
      }}
      placeholder="Username"
      />

      <label htmlFor="email">email</label>
      <input className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
      type="text" 
      name="email" 
      id="email" 
      onChange={(e)=>{
        setUser({...user,email:e.target.value})
      }}
      placeholder="email"
      />

      <label htmlFor="password">password</label>
      <input className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
      type="text" 
      name="password" 
      id="password" 
      onChange={(e)=>{
        setUser({...user,password:e.target.value})
      }}
      placeholder="password"
      />
    <button 
    onClick={onSignup}
    type="button" 
    className="p-2 bg-slate-200	 rounded-lg mb-4 focus:outline-none focus:broder-gray-600">Signup here</button>
    <Link href="/login">Visit Login Page</Link>
    </div>


)}

export default SignupPage