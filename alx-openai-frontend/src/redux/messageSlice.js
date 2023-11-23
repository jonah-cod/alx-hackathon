import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addPrompt = createAsyncThunk("prompts/send", async(message, thunkApi)=>{
      let results = await axios.get(`http://127.0.0.1:8000/prompt/${message}`);
      console.log(results)
})
const messages = createSlice({
      name: "messages",
      initialState:{
            loading: false,
            error: null,
            messages: [{type: "response", message: "response"}]
      },
      reducers: {
            addPromptMessage: (state, {payload})=>{
                  state.messages = [...state.messages,  payload]
            }
      },
      extraReducers: (builder)=>{
            builder.addCase(addPrompt.pending, (state, {payload})=>{
                  state.loading = true;
            })

            builder.addCase(addPrompt.fulfilled, (state,{payload})=>{
                  state.loading = false;
                  state.messages = [...state.messages, {type: "response", message: payload}]
            })
            builder.addCase(addPrompt.rejected, (state,{error})=>{
                  state.loading = false;
                  state.error = error
            })
      }
})

export const { addPromptMessage } = messages.actions

export default messages.reducer