import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    watchList: [
        {
            id: 1,
            name: 'Klaus',
            image: require('../../assets/profiles/profile1.jpeg'),
        },
        {
            id: 2,
            name: 'Elena',
            image: require('../../assets/profiles/profile2.jpeg'),
        },
        {
            id: 3,
            name: 'Damon',
            image: require('../../assets/profiles/profile3.jpeg'),
        },
        {
            id: 4,
            name: 'Caroline',
            image: require('../../assets/profiles/profile5.jpeg'),
        },
        {
            id: 5,
            name: 'Stefan',
            image: require('../../assets/profiles/profile4.jpeg'),
        },
    ],

}


const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        addNewList: (state, action) => {
            state.watchList = [...state.watchList, action.payload];
        }
    }
})

export const { addNewList } = watchListSlice.actions
export default watchListSlice.reducer