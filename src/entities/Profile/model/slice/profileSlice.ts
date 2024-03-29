import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (
        state,
        action: PayloadAction<Profile>,
      ) => {
        state.isLoading = false
        console.log(action)
        state.data = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
