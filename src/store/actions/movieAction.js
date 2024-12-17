import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { TOP_RATED_MOVIES, TREND_MOVIES } from "../../service/url";



const getTrendMovies = createAsyncThunk('movies/trendMovies', async params => {
    const response = await getRequest(TREND_MOVIES, params);
    return response.data.results
})


const topRatedMovies = createAsyncThunk('movies/topRated', async params => {
    const response = await getRequest(TOP_RATED_MOVIES, params);
    return response.data.results
})

export { getTrendMovies, topRatedMovies }