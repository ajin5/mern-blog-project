import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading:false,
  error:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true,
      state.error = false
    },
    signInSuccess: (state, action) => {
      state.loading = false,
      state.error = false,
      state.currentUser = action.payload
      
    },
    signInFailure: (state, action) => {
      state.loading = false,
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions

export default userSlice.reducer