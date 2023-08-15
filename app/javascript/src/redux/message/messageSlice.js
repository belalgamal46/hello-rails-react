import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchRandomGreetingMessage} from "./messageApi";
import {fetchMessage} from "./types";

const initialState = {
  message: {},
  isLoading: false
}

export const fetchRandomMessage = createAsyncThunk(fetchMessage, fetchRandomGreetingMessage)

const messageSlice = createSlice({
  name: 'message',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomMessage.fulfilled, (state, {payload}) => {
        state.message = payload
        state.isLoading = false
      })
      .addCase(fetchRandomMessage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchRandomMessage.rejected, (state, {payload}) => {
        state.isLoading = false
        state.message = payload
      })
  },
})

export default messageSlice.reducer;