import React from "react";

const Tweet = () => {
  return <div className="p-6 text-white ">
    <h1 className="text-xl mb-6">Home</h1>
    <input className=' mb-6 bg-transparent block w-full appearance-none border-b py-4 border-slate-500 ' type="text" placeholder="What's up?" id="tweet"  />
    <div className="flex w-full justify-end items-center">
      <p className="mr-4">0/280</p>
      <button className="bg-blue-500 px-6 py-2 rounded-full ">Tweet</button>
    </div>
  </div>;
};

export default Tweet;
