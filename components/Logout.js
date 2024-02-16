import React from "react"
import Image from "next/image"

import { useDispatch } from "react-redux";
import { logout } from "../reducers/user";
import { useSelector } from "react-redux"

const Logout = () => {
  const user = useSelector((state) => state.user.value)
  const dispatch=useDispatch()
  
  function handleLogout(){
    dispatch(logout())
  }
  return (
    <div className="flex flex-col p-6 justify-between h-screen ">
      <div>            <Image src="/twitter-logo.png" alt="Twitter" width={50} height={50} />
</div>

      <div className=" ">
        <div className="flex mb-4">
          <div className="mr-8 ">
            {" "}
            <Image src="/avatar.png" alt="Twitter" width={50} height={50} />
          </div>
          <div>
            <p className="text-lg ">{user.firstname}</p>
            <span className="text-slate-400">@{user.username}</span>
          </div>
        </div>
          <button onClick={handleLogout} className="bg-transparant border border-white text-sm px-4 py-2 rounded-full">
            Logout
          </button>
  
      </div>
    </div>
  )
}

export default Logout
