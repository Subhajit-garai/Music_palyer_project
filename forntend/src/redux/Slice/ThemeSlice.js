import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    primary: "#6482AD",
    primary2: "#7FA1C3",
    secondary: "#E2DAD6",
    secondary2: "#F5EDED",
    lightpink: "#F0A8D0",
   
    

}

export const ThemeSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        },
    }
})

export const { changeColor } = ThemeSlice.actions;
export default ThemeSlice.reducer