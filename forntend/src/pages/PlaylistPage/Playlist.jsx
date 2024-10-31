import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SelectIcon from '../../helper/SelectIcon'
import { toggleHeart } from '../../redux/Slice/playlistSlice.js'
import { useNavigate } from 'react-router-dom'

import { Button, Label, TextInput, Dropdown, Checkbox, ListGroup } from "flowbite-react";
import { PopUpWInModel } from '../../utility/PopUpWInModel.jsx'


const Playlist = () => {
  const { primary, primary2, lightpink, secondary, midnight_green } = useSelector((state) => state.color)
  const { currentPlaylistID, playlists, totalCount } = useSelector(state => state.playlist)

  const navigator = useNavigate()

  const createNewPlayList = () => {
    navigator("/playlist/create-playlist")
  }



  return (
    <>
      <div className="Playlist w-full min-h-screen bg-slate-300 flex flex-col gap-4 p-4">

        <div className="palylistinfo flex gap-4 " >

          <div className="palylist-info h-20 w-[calc(100%-5rem)] rounded-md bg-white">

          </div>

          <div className="create-playlist h-20 w-20 rounded-md bg-white flex flex-col  items-center justify-center" >
            <SelectIcon name={"simple-plus"} style={{ color: lightpink, fontSize: '30px' }} onClick={() => { createNewPlayList() }} />
            <p className='text-xs font-semibold text-gray-700'>Playlist</p>
          </div>

        </div>

        {/* list of all playlist */}

        <div className="palylistscont flex flex-col gap-2">
          {playlists.map((playlist) => <Playlistitem key={playlist.id} playlist={playlist} correntplaylistID={currentPlaylistID} />)}

        </div>
      </div>
    </>
  )
}

const Playlistitem = ({ playlist, correntplaylistID }) => {
  const navigator = useNavigate()

  let { id } = playlist;
  const { primary, primary2, lightpink, secondary, midnight_green } = useSelector((state) => state.color)
  const { isplaying } = useSelector(state => state.musicactions)
  const dispatch = useDispatch();

  let OptionList =["a","b","c"]

  const threedotActions= (Option) => {
    navigator("/playlist")

    console.log();
    
  }

  let isplayed = id == correntplaylistID && isplaying;

  const [isvisible, setisvisible] = useState(0);

  return (
    <>
      <div className="playlistitemCont h-32 w-full rounded bg-white py-2 px-4 flex gap-4 justify-between">
        <div className="info">
          <p className='font-semibold '>{playlist.name} </p>
          <p className='font-semibold '>{playlist.songCount}</p>
          <p className='font-semibold '>{playlist.name}</p>
        </div>

        <div className='action-btn flex flex-col justify-around border-l-2 border-gray-400 p-2 w-1/3'>
          <div className="moreAction flex justify-end">
            <SelectIcon name={"dots-ver"} style={{ color: lightpink, fontSize: '30px' }} onClick={() => {setisvisible(1) }} />

            {isvisible ?
             <PopUpWInModel>
              <div className="flex justify-center">
                <ListGroup className="w-48">

                  {OptionList.map((Option,i)=>
                  <ListGroup.Item key={i} onClick={() => {setisvisible(0) ;threedotActions(Option) }}>{Option}</ListGroup.Item>
                  )}
                </ListGroup>
              </div>
             </PopUpWInModel>
             :<>
             </>
            }

          </div>
          <div className="btn flex gap-4 justify-between">
            {
              playlist.isFavorite
                ? <SelectIcon name={"heart"} style={{ color: lightpink, fontSize: '25px' }} onClick={() => { dispatch(toggleHeart(id)) }} />
                : <SelectIcon name={"empty-heart"} style={{ color: lightpink, fontSize: '25px' }} onClick={() => { dispatch(toggleHeart(id)) }} />
            }

            {
              isplayed ?
                <SelectIcon name={"pause"} style={{ color: lightpink, fontSize: '25px' }} onClick={() => { }} />
                :
                <SelectIcon name={"play"} style={{ color: lightpink, fontSize: '25px' }} onClick={() => { }} />
            }
          </div>
        </div>


      </div>
    </>
  )
}
export default Playlist