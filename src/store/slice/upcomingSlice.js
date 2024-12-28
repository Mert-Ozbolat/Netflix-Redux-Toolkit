import { createSlice } from "@reduxjs/toolkit"
import { getUpcoming } from "../actions/movieAction"


const initialState = {
    Upcoming: [],
    pending: false,
    rejected: null
}

const upcomingSlice = createSlice({
    name: 'Upcoming',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
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
    }
})

export default upcomingSlice.reducer