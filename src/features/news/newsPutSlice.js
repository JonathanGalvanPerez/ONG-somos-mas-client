import {createSlice, createAsyncThunk}  from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../app/config';




/* Cuando se cree el formulario de edicion y se guarde la nueva informacion, llamar a la siguiente funcion y enviar los datos
    export const putNews =createAsyncThunk(
        'news/putNews', async(id)=> {
            try {
                const { data } = await axios.put(`${API_BASE_URL}/news/${id}`);
                return data
            } catch (err) {
                throw console.log(id);
            }
        }
) */

const newsPutSlice = createSlice({
    name:'news',
    initialState:{
        status:null,
        id:'',
    },
    reducers: {
        edit: (state,action) => {
          state.status= 'edit'
          state.id = action.payload
        },
        
        },
        
})
export const { edit } = newsPutSlice.actions

export default newsPutSlice.reducer