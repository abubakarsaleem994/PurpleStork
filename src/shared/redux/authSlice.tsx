import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoggedIn: false,
  
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return {...state, ...action.payload};
    },
    resetAuth: () => initialState,
  },
});

export const {setAuth, resetAuth} = authSlice.actions;

export default authSlice.reducer;
