import React from "react"
import Image from "next/image"
import { useState } from "react"

const Login = () => {
  const [isModalSignUp, setIsModalSignUp] = useState(false)
  const [isModalSignIn, setIsModalSignIn] = useState(false)
  function handleSignup() {
    setIsModalSignUp(true)
  }
  function handleSignin() {
    setIsModalSignIn(true)
  }
  function handleCloseSignUp() {
    setIsModalSignUp(false)
    setIsModalSignIn(false)
  }
  const ModalSignIn=(<div className="absolute rounded-2xl  p-6 bg-slate-700 text-white w-[500px] h-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="flex w-full justify-end">
    {" "}
    <button onClick={handleCloseSignUp} className="text-xl">
      x
    </button>
  </div>
  <div className="flex flex-col items-center ">
    <div className="my-8 flex  justify-center items-center mb-4">
      {" "}
      <Image
        src="/twitter-logo.png"
        alt="Twitter"
        width={40}
        height={40}
      />
    </div>
    <h1 className="text-2xl mb-4 text-center">
      Connect to Hackatweet 
    </h1>
    <div className="flex flex-col justify-center items-center mb-2 p-2">
      {" "}
     
      <input
        className="bg-transparent border border-white w-full mb-4 p-2"
        placeholder="Username"
        type="text"
      />
      <input
        className="bg-transparent border border-white w-full  p-2"
        placeholder="Password"
        type="text"
      />
    </div>

    <button className="bg-blue-500 px-16 py-2 rounded-full mb-4 ">
      Sign in
    </button>
  </div>{" "}
</div>)
  const ModalSignUp=( <div className="absolute rounded-2xl  p-6 bg-slate-700 text-white w-[500px] h-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="flex w-full justify-end">
    {" "}
    <button onClick={handleCloseSignUp} className="text-xl">
      x
    </button>
  </div>
  <div className="flex flex-col items-center ">
    <div className="my-8 flex  justify-center items-center mb-4">
      {" "}
      <Image
        src="/twitter-logo.png"
        alt="Twitter"
        width={40}
        height={40}
      />
    </div>
    <h1 className="text-2xl mb-4 text-center">
      Create your Hackatweet account
    </h1>
    <div className="flex flex-col justify-center items-center mb-2 p-2">
      {" "}
      <input
        className="bg-transparent border border-white w-full mb-4 p-2"
        placeholder="Firstname"
        type="text"
      />
      <input
        className="bg-transparent border border-white w-full mb-4 p-2"
        placeholder="Username"
        type="text"
      />
      <input
        className="bg-transparent border border-white w-full  p-2"
        placeholder="Password"
        type="text"
      />
    </div>

    <button className="bg-blue-500 px-16 py-2 rounded-full mb-4 ">
      Sign up
    </button>
  </div>{" "}
</div>)

  return (
    <>
      {isModalSignUp && ModalSignUp}
      {isModalSignIn && ModalSignIn}
   

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
