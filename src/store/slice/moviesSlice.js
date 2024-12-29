import { createSlice } from "@reduxjs/toolkit";
import { getTrendMovies, getTrendTv, getUpcoming, topRatedMovies } from "../actions/movieAction";

const initialState = {
    trendMovies: [],
    topRatedMovies: [],
    TrendTv: [],
    upcomingMovies: [],
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
            })


            // Top Rated Movies
            .addCase(topRatedMovies.pending, state => {
                state.pending = true;
                state.error = null
            })
            .addCase(topRatedMovies.rejected, state => {
                state.error = "Something went wrong!"
                state.pending = false;
            })
            .addCase(topRatedMovies.fulfilled, (state, action) => {
                state.topRated = action.payload;
                state.pending = false;
            })

            // Trend Tv
            .addCase(getTrendTv.pending, state => {
                state.pending = true
                state.error = null;
            })
            .addCase(getTrendTv.rejected, (state, action) => {
                state.error = action.error.message || "Something went wrong!";
                state.pending = false
            })
            .addCase(getTrendTv.fulfilled, (state, action) => {
                state.error = null;
                state.pending = false
                state.TrendTv = action.payload
            })

            // Upcoming Movies
            .addCase(getUpcoming.pending, state => {
                state.pending = true
                state.rejected = null
            })
            .addCase(getUpcoming.rejected, (state, action) => {
                state.error = action.error.message || "Something went wrong!";
                state.pending = false
            })
            .addCase(getUpcoming.fulfilled, (state, action) => {
                state.Upcoming = action.payload
                state.pending = false
                state.error = null
            })
    },
});

export default moviesSlice.reducer;
