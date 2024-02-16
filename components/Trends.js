import React from "react";

const Trends = (props) => {
  const hashtagExists = (hashtagToCheck) => {
    for (let i = 0; i < props.trends.length; i++) {
      if (props.trends[i].includes(hashtagToCheck)) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="text-white p-4">
      <h1 className="text-xl mb-8">Trends</h1>
      {props.trends.map((hashtags, index) =>
        hashtags.map(
          (hashtag, i) =>
            hashtagExists(hashtag) && (
              <div className="bg-gray-700 p-4" key={index + "-" + i}>
                <h2 className="mb-2">{hashtag}</h2>
                <p className="text-sm text-slate-400">
                  {hashtagExists(hashtag) ? hashtags.length : "Doesn't exist"} Tweets
                </p>
              </div>
            )
        )
      )}
    </div>
  );
};

export default Trends;
