import React from "react"
import Image from "next/image"
import { FaRegThumbsUp } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


const LastTweets = () => {
  return (
    <div className="text-white p-4 justify-center items-center">
      <div className="flex justify-start items-center">
        <div className="mr-8 ">
          {" "}
          <Image src="/avatar.png" alt="Twitter" width={50} height={50} />
        </div>
        <p className="text-lg ">
          Username <span className="text-slate-400">@username</span>
        </p>
      </div>
      <p className="mb-4 text-lg">This is an example of the text of tweet</p>
      <div className="flex text-white  ">
        {" "}
        <FaRegThumbsUp  className="mr-2"/>
        <RiDeleteBin6Line />
      </div>
    </div>
  )
}

export default LastTweets
