import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { TOP_RATED_MOVIES, TREND_MOVIES, TREND_TV, UPCOMING } from "../../service/url";



const getTrendMovies = createAsyncThunk('movies/trendMovies', async params => {
    const response = await getRequest(TREND_MOVIES, params);
    return response.data.results
})


const topRatedMovies = createAsyncThunk('topRated/topRated', async params => {
    const response = await getRequest(TOP_RATED_MOVIES, params);
    return response.data.results
})

const getTrendTv = createAsyncThunk('trendTv/trendTv', async params => {
    const response = await getRequest(TREND_TV, params);
    return response.data.results
})

const getUpcoming = createAsyncThunk('upcoming/upcoming', async params => {
    const response = await getRequest(UPCOMING, params);
    return response.data.results
})


export { getTrendMovies, topRatedMovies, getTrendTv, getUpcoming }