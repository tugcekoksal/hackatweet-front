import React from "react";
import Image from "next/image";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../reducers/user";

const SignUp = (props) => {
  const dispatch=useDispatch()


  const [firstname,setFirstname]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  function handleSignUp(){
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(login(data.user))
       
        console.log(data.user)
      })
  }

  return <div className="absolute rounded-2xl  p-6 bg-slate-700 text-white w-[500px] h-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="flex w-full justify-end">
    {" "}
    <button  onClick={()=>props.handleClose()} className="text-xl">
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
      onChange={(e)=>setFirstname(e.target.value)}
        className="bg-transparent border border-white w-full mb-4 p-2"
        placeholder="Firstname"
        type="text"
      />
      <input
        onChange={(e)=>setUsername(e.target.value)}
        className="bg-transparent border border-white w-full mb-4 p-2"
        placeholder="Username"
        type="text"
      />
      <input
        onChange={(e)=>setPassword(e.target.value)}
        className="bg-transparent border border-white w-full  p-2"
        placeholder="Password"
        type="text"
      />
    </div>

    <button onClick={handleSignUp} className="bg-blue-500 px-16 py-2 rounded-full mb-4 ">
      Sign up
    </button>
  </div>{" "}
</div>;
};

export default SignUp;
