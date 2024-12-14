import { createSlice } from "@reduxjs/toolkit";
import { getTrendMovies } from "../actions/movieAction";


const initialState = {
    trendMovies: [],
    pending: false,
    error: []
}


const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getTrendMovies.pending, state => {
                state.pending = true
            })
            .addCase(getTrendMovies.rejected, (state, action) => {
                state.error = action.error
                state.pending = false
            })
            .addCase(getTrendMovies.fulfilled, (state, action) => {
                state.trendMovies = action.error
                state.pending = false
            })
    }
})

export const { addNewList } = moviesSlice.actions
export default moviesSlice.reducer