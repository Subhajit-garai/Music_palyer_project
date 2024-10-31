import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./Slice/ColorSlice.js";
import ThemeReducer from "./Slice/ThemeSlice.js";
import musicActionsReducer from "./Slice/musicActionsSlice.js";
import playlistReducer from "./Slice/playlistSlice.js";


export const  store = configureStore({
    reducer: {
        color:colorReducer, 
        Theme:ThemeReducer,
        musicactions:musicActionsReducer,
        playlist:playlistReducer,
    } 
})