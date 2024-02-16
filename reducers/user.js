import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { firstname: null, username: null, password:null ,token:null},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
      state.value.password = action.payload.password;
    },
    logout: (state) => {
      state.value.firstname = null;
      state.value.token = null;
      state.value.username = null;
      state.value.password = null;
      
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
