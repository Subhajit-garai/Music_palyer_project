import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatTime } from '../../helper/formatTime';
import { setended, setpercentage, setsongs, settimer } from '../../redux/Slice/musicActionsSlice.js';
import { setAllPlaylists, setcurrentPlaylist } from '../../redux/Slice/playlistSlice.js';



const localplaylists = [
    {
        id: 1,
        name: "My Favorite Songs",
        type: "collection" ,
        songs: [ {
            number: 1,
            name: 'audio1',
            img: './images/img1.jpg',
            url: './audio/audio4.mp3'
        },
        {
            number: 2,
            name: 'audio2',
            img: './images/img2.jpg',
            url: './audio/audio3.mp3'
        },
        {
            number: 3,
            name: 'audio3',
            img: './images/img3.png',
            url: './audio/audio2.mp3'
        },],
        isFavorite: true,
        isPublic: true,
        songCount:3,
        Shared: [{}], 
    },
    {
        id: 2,
        name: "My Collection ",
        type: "collection" ,
        songs: [ {
            number: 1,
            name: 'audio1',
            img: './images/img1.jpg',
            url: './audio/audio4.mp3'
        },
        {
            number: 2,
            name: 'audio2',
            img: './images/img2.jpg',
            url: './audio/audio3.mp3'
        },
        {
            number: 3,
            name: 'audio3',
            img: './images/img3.png',
            url: './audio/audio2.mp3'
        },],
        isFavorite: true,
        isPublic: true,
        songCount:3,
        Shared: [{}], 
    },
    {
        id: 3,
        name: "Lofi",
        type: "collection" ,
        songs: [ {
            number: 1,
            name: 'audio1',
            img: './images/img1.jpg',
            url: './audio/audio4.mp3'
        },
        {
            number: 2,
            name: 'audio2',
            img: './images/img2.jpg',
            url: './audio/audio3.mp3'
        },
        {
            number: 3,
            name: 'audio3',
            img: './images/img3.png',
            url: './audio/audio2.mp3'
        },],
        isFavorite: false,
        isPublic: true,
        songCount:3,
        Shared: [{}], 
    },

]


const GolobalMusicEle = () => {

    const dispatch = useDispatch();
    const audioRef = useRef(null)
    const { currentSong } = useSelector(state => state.musicactions)
    const { currentPlaylistID, playlists } = useSelector(state => state.playlist)

    // factch data from db
    let currentplaylistId =1;

    useEffect(() => {
        dispatch(setAllPlaylists(localplaylists))
        dispatch(setcurrentPlaylist(currentplaylistId))
    }, [])
   
    useEffect(() => {
        let list = playlists.filter((l)=>l.id == currentPlaylistID)        
        dispatch(setsongs(list[0]?.songs))
    }, [currentPlaylistID])

  

    return (
        <>
            <audio id='aduioElement'
                src={currentSong?.url} ref={audioRef}
                onEnded={() => { dispatch(setended(true)) }}
            />
        </>
    )
}

export default GolobalMusicEle