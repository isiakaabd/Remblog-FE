import { createSlice } from '@reduxjs/toolkit';
interface User {
  _id: string;
  address?: string;
  email?: string;
  name?: string;
  username: string;
}

interface InitialStateProp {
  isLoading: boolean;
  user?: User;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    user: undefined,
  } as InitialStateProp,

  reducers: {
    getUserDetails(state, details) {
      state.user = details.payload;
    },
  },
});

const { reducer, actions } = authSlice;
export const { getUserDetails } = actions;
export default reducer;
