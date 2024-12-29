import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    query: [],
    pending: false,
    error: null,
}

const searchSlice = createSlice({
    name: 'Search',
    initialState,
    reducers,
    extraReducers: builder => {
        builder
            .addCase()
    }
})