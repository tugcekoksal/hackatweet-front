import React from "react"
import Image from "next/image"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTweet } from "../reducers/tweet";
import { BiSolidLike } from "react-icons/bi";
import { useState } from "react";




const LastTweets = (props) => {
  const [isLiked, setIsLiked] = useState(false)
  const dispatch=useDispatch()
  const user = useSelector((state) => state.user.value)
  
  function handleDelete(){
    fetch(`http://localhost:3000/tweet/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        dispatch(removeTweet())
      })
  }

  return (
    <div className="text-white p-4 justify-center items-center">
      <div className="flex justify-start items-center">
        <div className="mr-8 ">
          {" "}
          <Image src="/avatar.png" alt="Twitter" width={50} height={50} />
        </div>
        <p className="text-lg ">
          {props.firstname}<span className="text-slate-400 "> @{props.username}</span>
        </p>
      </div>
      <p className="mb-4 text-lg">{props.content}</p>
      <div className="flex text-white  ">
        {" "}
        <BiSolidLike onClick={()=>setIsLiked(!isLiked)} className={`mr-2  `}  style={isLiked ? {color: 'red'} : {color: 'white'}}/>
        {user.username === props.username && <RiDeleteBin6Line onClick={handleDelete}  className="mr-2"/>}
    
      </div>
    </div>
  )
}

export default LastTweets
