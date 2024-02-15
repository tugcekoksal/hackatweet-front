import React from "react"
import Image from "next/image"

const Logout = () => {
  return (
    <div className="flex flex-col p-6 justify-between h-screen ">
      <h1 className="text-xl mb-6">Logo</h1>

      <div className=" ">
        <div className="flex mb-4">
          <div className="mr-8 ">
            {" "}
            <Image src="/avatar.png" alt="Twitter" width={50} height={50} />
          </div>
          <div>
            <p className="text-lg ">Username</p>
            <span className="text-slate-400">@username</span>
          </div>
        </div>
          <button className="bg-transparant border border-black text-sm px-4 py-2 rounded-full">
            Logout
          </button>
  
      </div>
    </div>
  )
}

export default Logout
