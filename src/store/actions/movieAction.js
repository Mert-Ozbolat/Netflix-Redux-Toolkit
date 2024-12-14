import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { TREND_MOVIES } from "../../service/url";



const getTrendMovies = createAsyncThunk('movies/trendMovies', async params => {
    const response = await getRequest(TREND_MOVIES, params);
    return response.data.results
})

export { getTrendMovies }