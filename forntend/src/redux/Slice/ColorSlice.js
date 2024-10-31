import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    primary: "#6482AD",
    primary2: "#7FA1C3",
    secondary: "#E2DAD6",
    secondary2: "#F5EDED",
    lightpink: "#F0A8D0",
    midnight_green:"#1a535cff",
    robin_egg_blue:"#4ecdc4ff",
    mint_cream:"#f7fff7ff",
    light_red: "#ff6b6bff",
    naples_yellow:"#ffe66dff",



}

export const ColorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        },
    }
})

export const { changeColor } = ColorSlice.actions;
export default ColorSlice.reducer