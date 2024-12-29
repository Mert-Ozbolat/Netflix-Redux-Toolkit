import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from './slice/watchListSlice'
import moviesSlice from './slice/moviesSlice'
import trendTvSlice from './slice/trendTvSlice'
import topRated from "./slice/topRated";
import upcomingSlice from "./slice/upcomingSlice"


const store = configureStore({
    reducer: {
        movies: moviesSlice
    }
})


export default store