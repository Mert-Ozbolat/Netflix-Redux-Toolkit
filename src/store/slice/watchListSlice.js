import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "iconsax-react-native";



const initialState = {
    name: [],
    Profile: {},
}


const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {

    }
})


export default watchListSlice.reducer