import { createSlice } from "@reduxjs/toolkit"
import { getTrendTv } from "../actions/movieAction"


const initialState = {
    TrendTv: [],
    pending: false,
    rejeted: null
}


const TrendTvSlice = createSlice({
    name: 'TrendTv',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
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
    }
})

export default TrendTvSlice.reducer;