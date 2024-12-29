import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { TOP_RATED_MOVIES, TREND_MOVIES, TREND_TV, UPCOMING } from "../../service/url";



const getTrendMovies = createAsyncThunk('movies/trendMovies', async params => {
    const response = await getRequest(TREND_MOVIES, params);
    return response.data.results
})


const topRatedMovies = createAsyncThunk('movies/topRatedMovies', async params => {
    const response = await getRequest(TOP_RATED_MOVIES, params);
    return response.data.results
})

const getTrendTv = createAsyncThunk('movies/TrendTv', async params => {
    const response = await getRequest(TREND_TV, params);
    return response.data.results
})

const getUpcoming = createAsyncThunk('movies/upcomingMovies', async params => {
    const response = await getRequest(UPCOMING, params);
    return response.data.results
})


const search = createAsyncThunk('')


export { getTrendMovies, topRatedMovies, getTrendTv, getUpcoming }