
import Tweet from "./Tweet"
import LastTweets from "./LastTweets"
import Trends from "./Trends"
import Logout from "./Logout"
import { useEffect,useState } from "react"

import { useSelector } from "react-redux"

function Home() {
  const tweets = useSelector((state) => state.tweet.value)
  const [lastTweets, setLastTweets] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:3000/tweet")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
       setLastTweets(data.map((tweet,index) =><LastTweets id={tweet._id} key={index} content={tweet.content} username={tweet.username} firstname={tweet.firstname}/>))
       
      })
  }, [tweets])
  return (
    <main className="flex justify-between bg-slate-800 h-screen divide-x divide-slate-500 text-white  font-mont-heavy">
      <div className="w-[25%] text-xl "><Logout/></div>
      <div className="w-[45%] flex-grow  divide-y divide-slate-500">
        <div>
          <Tweet />
        </div>
        <div className="overflow-auto max-h-[400px]">
          {lastTweets}
        </div>
      </div>
      <div className="w-[30%]">
        {" "}
        <Trends />
      </div>
    </main>
  )
}

export default Home
