import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    playlists:[],
    totalCount: 0,
    currentPlaylistID: null,
    updatetimer:0,
}

// `playlist:
// [{
//  id:mongodbId, -->ui
//  name: "My Favorite Songs", -->ui
//  type: "collection" ->optional
//  songs:[{songs id...}],-->ui
//  createdBy: Username_id,
//  createdAt: timestamp,
//  updatedAt: timestamp,
//  isFavorite: true,-->ui
//  isPublic: true,
//  Shared:[{}], --> only shared puple can access this.
// }]`

export const PlaylistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        
    //    `stateChangedupdateIndb: (state,action) =>{
    //     state.updatetimer;



    //    },`
       setAllPlaylists: (state,action) =>{
        state.playlists = action.payload;   // array
        state.totalCount = action.payload.length;
       },
       setcurrentPlaylist: (state,action) =>{
        state.currentPlaylistID = action.payload;
       },
       toggleHeart: (state,action) =>{        
        let id  = action.payload;        
        state.playlists.map((playlist) =>{
            if(playlist.id === id){                
                playlist.isFavorite =!playlist.isFavorite;
            }
        })
       },
    }
})

export const { setcurrentPlaylist, setAllPlaylists,toggleHeart} = PlaylistSlice.actions;
export default PlaylistSlice.reducer