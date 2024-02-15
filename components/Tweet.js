import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTweet } from "../reducers/tweet";
import { useSelector } from 'react-redux';

const Tweet = () => {
  const dispatch=useDispatch();
  const user = useSelector((state) => state.user.value);
  const [tweet, setTweet] = useState("");
  function handleTweetInput(e){
    setTweet(e.target.value);

  }
  function handleTweet() {
    console.log(tweet);
    fetch("http://localhost:3000/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: tweet, author: user.username, hashtag: 'skhjbdnks' }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addTweet(data.tweet));
        console.log(data);
      });
  }

  return (
    <div className="p-6 text-white ">
      <h1 className="text-xl mb-6">Home</h1>
      <input onChange={(e)=>handleTweetInput(e)} value={tweet} className=' mb-6 bg-transparent block w-full appearance-none border-b py-4 border-slate-500 ' type="text" placeholder="What's up?" id="tweet"  />
      <div className="flex w-full justify-end items-center">
        <p className="mr-4">{tweet.length}/280</p>
        <button onClick={handleTweet} className="bg-blue-500 px-6 py-2 rounded-full ">Tweet</button>
      </div>
    </div>
  );
};

export default Tweet;