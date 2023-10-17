"use client"
import Link from "next/link"
import React,{useState,useEffect} from "react"
import { useRouter } from "next/navigation"
import axios  from "axios"



const SignupPage = () => {
  const router=useRouter();

  const [user,setUser]=React.useState({
    email:"",
    password:"",
    username:""
  })
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const onSignup=async()=>{
    try {
      const responce=await axios.post("/api/users/signup",user);
      console.log("Signup Sucess",responce.data);
      router.push('/login');
    } catch (error:any) {
      console.log("Signup Failed")
      console.log(error.message);

    }finally{

    }
  }
  useEffect(() => {
      if(user.email.length>0 && user.password.length>0 &&user.username.length>0)
      {
        setButtonDisabled(false);
      }
      else
      {
        setButtonDisabled(true);
      }
  }, [user])
  

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
    className="p-2 bg-slate-200	 rounded-lg mb-4 focus:outline-none focus:broder-gray-600">{buttonDisabled?"No Signup":"Sign up"}</button>
    <Link href="/login">Visit Login Page</Link>
    </div>


)}

export default SignupPage