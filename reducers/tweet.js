import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: { },
};

export const tweetSlice = createSlice({
	name: 'tweet',
	initialState,
	reducers: {
		addTweet: (state, action) => {
			state.value=(action.payload);
		},
		removeTweet: (state, action) => {
			state.value = state.value.filter(bookmark => bookmark.title !== action.payload.title);
		},
	
	},
});

export const { addTweet, removeTweet} = tweetSlice.actions;
export default tweetSlice.reducer;
