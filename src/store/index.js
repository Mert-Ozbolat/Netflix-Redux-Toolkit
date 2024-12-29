import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from './slice/watchListSlice'
import moviesSlice from './slice/moviesSlice'

import topRated from "./slice/topRated";



const store = configureStore({
    reducer: {
        watchList: watchListSlice,
        movies: moviesSlice,
        topRated: topRated,
    }
})


export default store