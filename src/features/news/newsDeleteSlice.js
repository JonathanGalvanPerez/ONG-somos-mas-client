import {createSlice, createAsyncThunk}  from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../app/config';


export const deleteNews =createAsyncThunk(
    'news/deleteNews', async(id)=> {
        try {
            const { data } = await axios.delete(`${API_BASE_URL}/news/${id}`);
            return data
          } catch (err) {
            throw err;
          }
    }
)

const newsDeleteSlice = createSlice({
    name:'news',
    initialState:{
        status:null
    },
    extraReducers:{
        [deleteNews.pending]:(state) =>{
            state.status='loading'
        },
        [deleteNews.fulfilled]:(state,{payload})=>{
            state.status='success'
        },
        [deleteNews.rejected]:(state,{payload})=>{
            state.status='failed'
        }
    }
})

export const selectNewsDelete = (state) => state.newsDelete

export default newsDeleteSlice.reducer