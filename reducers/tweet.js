import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: {content:null,username:null,firstname:null,hashtags:[] },
};

export const tweetSlice = createSlice({
	name: 'tweet',
	initialState,
	reducers: {
		addTweet: (state, action) => {
			state.value.content = action.payload.content;
			state.value.username = action.payload.username;
			state.value.firstname = action.payload.firstname;
			state.value.hashtags.push(action.payload.hashtags)
		
	
		},
		removeTweet: (state) => {
			state.value.content = null
			state.value.username = null
			state.value.firstname = null
			state.value.hashtags = []

		},
	
	},
});

export const { addTweet, removeTweet} = tweetSlice.actions;
export default tweetSlice.reducer;
