import { createSlice } from "@reduxjs/toolkit"
import { topRatedMovies } from "../actions/movieAction"

const initialState = {
    topRated: [],
    pending: false,
    error: null,
}

const topRated = createSlice({
    name: "topRated",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
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
    }
})

export default topRated.reducer;