
import Tweet from "./Tweet"
import LastTweets from "./LastTweets"
import Trends from "./Trends"
import Logout from "./Logout"

function Home() {
  return (
    <main className="flex justify-between bg-slate-800 h-screen divide-x divide-slate-500 text-white">
      <div className="w-[25%] text-xl "><Logout/></div>
      <div className="w-[45%] flex-grow  divide-y divide-slate-500">
        <div>
          <Tweet />
        </div>
        <div>
          <LastTweets />
          <LastTweets />
          <LastTweets />
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
