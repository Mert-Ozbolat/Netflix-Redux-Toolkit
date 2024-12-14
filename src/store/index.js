import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from './slice/watchListSlice'
import moviesSlice from './slice/moviesSlice'

const store = configureStore({
    reducer: {
        watchList: watchListSlice,
        movies: moviesSlice
    }
})


export default store