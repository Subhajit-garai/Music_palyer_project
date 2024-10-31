import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    songs: [],
    isplaying: false,
    palyoption:'1',
    currentSong:[],
    timer:'0.00',
    durationInSeconds:0,
    duration:'',
    percentage:0,
    ended:false,

}

const musicActionsSlice = createSlice({
    name: 'musicactions',
    initialState,
    reducers: {
        setplaypause: (state, action) =>{
           state.isplaying = action.payload;
        },
        setpalyoption: (state, action) =>{
            state.palyoption = action.payload;
        },
       
        setcurrentSong: (state, action) =>{
            state.currentSong = action.payload;
        },
        settimer: (state, action) =>{
            state.timer = action.payload;
        },
        setdurationInSeconds: (state, action) =>{
            state.durationInSeconds = action.payload;
        },
        setduration: (state, action) =>{
            state.duration = action.payload;
        },
        setpercentage: (state, action) =>{
            state.percentage = action.payload;
        },
        setended: (state, action) =>{
            state.ended = action.payload;
        },
        setsongs:(state, action) =>{
            state.songs = action.payload;                  
            if(state.songs?.length > 0) state.currentSong = state.songs[0];  
        },
       

    }
})

export const {setplaypause,setpalyoption,
    setcurrentSong,settimer,setdurationInSeconds,
    setpercentage, setended,setsongs,setduration} =musicActionsSlice.actions;
export default musicActionsSlice.reducer;