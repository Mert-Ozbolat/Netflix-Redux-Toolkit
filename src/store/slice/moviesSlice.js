import { createSlice } from "@reduxjs/toolkit";
import { getTrendMovies } from "../actions/movieAction";

const initialState = {
    trendMovies: [],
    pending: false,
    error: null,
    topRated: []
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getTrendMovies.pending, state => {
                state.pending = true;
                state.error = null;
            })
            .addCase(getTrendMovies.rejected, (state, action) => {
                state.error = action.error.message || "Something went wrong!";
                state.pending = false;
            })
            .addCase(getTrendMovies.fulfilled, (state, action) => {
                state.trendMovies = action.payload;
                state.pending = false;
            });
    },
});

export default moviesSlice.reducer;
