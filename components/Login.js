import React from "react"
import Image from "next/image"
import { useState } from "react"
import { useDispatch } from "react-redux"
import SignIn from "./signIn"
import SignUp from "./signUp"





const Login = () => {

  const [isModalSignUp, setIsModalSignUp] = useState(false)
  const [isModalSignIn, setIsModalSignIn] = useState(false)

  function handleSignup() {
    setIsModalSignUp(true)
  }
  function handleSignin() {
    setIsModalSignIn(true)
  }

  function handleClose(){
    setIsModalSignIn(false)
    setIsModalSignUp(false)
  }




  return (
    <>
      {isModalSignUp && <SignUp handleClose={handleClose}/>}
      {isModalSignIn && <SignIn/>}
   

      <div className="flex h-screen bg-slate-800 text-white font-bold font-mont-heavy">
        <div className="w-2/5 bg-login  bg-cover bg-center" />
        <div className="w-3/5 p-8">
          <div className="my-8">
            {" "}
            <Image
              src="/twitter-logo.png"
              alt="Twitter"
              width={50}
              height={50}
            />
          </div>
          <h1 className="text-6xl my-14 max-w-[400px]">See what's happening</h1>
          <h2 className="text-4xl my-8">Join Hacatweet today</h2>
          <button
            onClick={handleSignup}
            className="bg-blue-500 px-16 py-2 rounded-full mb-4 "
          >
            Sign up
          </button>
          <p className="mb-4">Already have an account?</p>
          <button     onClick={handleSignin} className="bg-transparent border border-white px-16 py-2 rounded-full text-blue-600 font-bold ">
            Sign in
          </button>
        </div>
      </div>
    </>
  )
}

export default Login
