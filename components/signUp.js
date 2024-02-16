import React from "react";
import Image from "next/image";

const SignUp = () => {
  // function handleCloseSignUp() {
  //   setIsModalSignUp(false)
  //   console.log('close')
  //   setIsModalSignIn(false)
  // }
  return <div className="absolute rounded-2xl  p-6 bg-slate-700 text-white w-[500px] h-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="flex w-full justify-end">
    {" "}
    <button className="text-xl">
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
</div>;
};

export default SignUp;
