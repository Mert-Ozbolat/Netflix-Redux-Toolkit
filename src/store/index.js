import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from './slice/watchListSlice'
import moviesSlice from './slice/moviesSlice'
import trendTvSlice from './slice/trendTvSlice'
import topRated from "./slice/topRated";
import upcomingSlice from "./slice/upcomingSlice"


const store = configureStore({
    reducer: {
        watchList: watchListSlice,
        movies: moviesSlice,
        topRated: topRated,
        trendTv: trendTvSlice,
        upcoming: upcomingSlice
    }
})


export default store