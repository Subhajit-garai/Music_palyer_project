import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

import {
  setcurrentSong, setduration, setdurationInSeconds, setended,
  setpalyoption, setpercentage, setplaypause
} from '../../redux/Slice/musicActionsSlice.js';
import SelectIcon from '../../helper/SelectIcon.jsx';
import { formatTime } from '../../helper/formatTime.js';



let playColor = "red"
const MusicPlayer = () => {

  let location = useLocation();
  let isMusicPath = location.pathname === '/music'

  const dispatch = useDispatch()
  const { primary, primary2, lightpink, secondary, midnight_green } = useSelector((state) => state.color)
  const { isplaying, palyoption, currentSong, songs, duration, ended } = useSelector(state => state.musicactions)

  const [playOption, setplayOption] = useState(palyoption)
  const [timer, settimer] = useState('0.00')
  const [percentage, setpercentage] = useState(0)
  const setisplaying = (state) => {
    dispatch(setplaypause(state))
  }


  //reference of document object
  const imgRef = useRef(null)
  const progressContRef = useRef(null)
  const audioElement = document.getElementById("aduioElement")



  useEffect(() => {
    if (ended) {
      changeToNext();
      dispatch(setended(false));
    }
  }, [ended])

  useEffect(() => {
    const audio = audioElement;

    const handleTimeUpdate = () => {
      let time = audio.currentTime
      settimer(formatTime(time));
      let percentage = Math.round((time / audioElement.duration) * 100)
      setpercentage(percentage)
    };

    // Add the event listener when the component mounts
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [currentSong]);



  useEffect(() => {
    if (audioElement) {
      const setMusicProperty = () => {
        dispatch(setduration(formatTime(audioElement.duration)));
        dispatch(setdurationInSeconds(audioElement.duration))
      };
      audioElement.addEventListener('canplay', setMusicProperty);
      // Cleanup the event listener when the component unmounts
      return () => {
        audioElement.removeEventListener('canplay', setMusicProperty);
      };
    }
  }, [currentSong]);

  const LoadSong = (val) => {
    pausefunc()
    let currentsongIndex = currentSong ? songs?.findIndex(song => song.number === currentSong.number) : 0;
    if (currentsongIndex === 0) {
      currentsongIndex = songs?.length;
    }
    let newindx = (currentsongIndex + val) % songs?.length,
      newsong = songs[newindx]
    dispatch(setcurrentSong(newsong))
  }

  const changeSongOffsets = (event) => {
    pausefunc()
    const progress = progressContRef.current
    let progressWidth = progress.clientWidth
    const clientX = event.clientX;
    const newValue = (clientX / progressWidth) * 100;
    setpercentage(newValue)
    const duration = audioElement.duration; //current
    const secondpass = Math.floor((newValue * duration) / 100)
    audioElement.currentTime = secondpass;
    playfunc()

  }


  const changeToNext = () => {
    LoadSong(1);
    if (audioElement) {
      audioElement.addEventListener('canplay', playfunc);
    }
  }

  const playfunc = () => {
    if (audioElement) {
      setisplaying(true)
      audioElement.play();
      // dispatch(setplaypause(true))
    }
  }
  const pausefunc = () => {

    if (audioElement) {
      audioElement.pause();
      setisplaying(false)
      // dispatch(setplaypause(false))

    }
  }
  const changePlayOption = () => {
    // 1 --> repeat one
    // 2 --> shuffle
    // 3/0 --> sync
    // let option = ['1','2',"3"]
    let newindx = (parseInt(playOption, 10) + 1) % 3 //option.length
    setplayOption(`${newindx}`)
    dispatch(setpalyoption(`${newindx}`)) //setting play option in redux
  }
  const IconoptionSwitch = () => {
    switch (playOption) {
      case "1": return <SelectIcon name={"repeatone"} style={{ color: midnight_green, fontSize: '30px' }} onClick={changePlayOption} />;
      case "2": return <SelectIcon name={"shuffle"} style={{ color: 'gold', fontSize: '30px' }} onClick={changePlayOption} />;
      default: return <SelectIcon name={"sync"} style={{ color: primary, fontSize: '30px' }} onClick={changePlayOption} />;
    }
  }



  return (
    isMusicPath // is music player bar 
      ?
      <>
        <div className=' min-h-screen flex flex-col items-center justify-center p-2 '>

          <div className="flex flex-col items-center gap-4 p-6">

            {/* image */}
            <div className="imgContner rounded max-h-60 overflow-hidden ">
              <img src={currentSong?.img} ref={imgRef} alt="" className='rounded  object-cover' />
            </div>

            {/* information */}
            <div className="musicInfo">
              <div>
                <p className="music-name font-bold text-lg">music-name</p>
              </div>
              <div>
                <p className="artisc-name font-semibold text-sm">artisc-name</p>
              </div>
            </div>

            {/* progress bar */}

            <div className="progress-div w-full bg-gray-200 rounded-full h-4" ref={progressContRef} onClick={(e) => { changeSongOffsets(e) }}>
              <div className="progress-bar bg-blue-500 h-4 rounded-full w-0" style={{ width: `${percentage}%` }}></div>
            </div>

            {/* music timer */}

            <div className="musicTimer w-full flex justify-between ">
              <p className="start">{timer}</p>
              <p className="end">{duration}</p>
            </div>

            {/* action icons */}

            <div className="actionIcons w-full flex justify-between">

              <SelectIcon name={"empty-heart"} style={{ color: lightpink, fontSize: '30px' }} onClick={() => { }} />
              <SelectIcon name={"backward"} style={{ color: 'gold', fontSize: '30px' }} onClick={() => { LoadSong(-1) }} />
              {
                isplaying ?
                  <SelectIcon name={"pause"} style={{ color: primary, fontSize: '30px' }} onClick={() => { pausefunc() }} />
                  :
                  <SelectIcon name={"play"} style={{ color: playColor, fontSize: '30px' }} onClick={() => { playfunc() }} />
              }
              <SelectIcon name={"forward"} style={{ color: 'gold', fontSize: '30px' }} onClick={() => { LoadSong(1) }} />
              {
                IconoptionSwitch()
              }
            </div>
          </div>

        </div>
      </>
      : <>
        <div className="main flex flex-col fixed left-0 bottom-0 gap-2 h-32 w-full bg-slate-400 border-t-2  border-gray-400 p-2">
          { }

          {/* music timer + progress bar */}

          <div className="musicTimer w-full flex justify-between items-center gap-1">
            <p className="start">{timer}</p>
            <div className="progress-div w-full bg-gray-200 rounded-full h-2" ref={progressContRef} onClick={(e) => { changeSongOffsets(e) }}>
              <div className="progress-bar bg-blue-500 h-2 rounded-full w-0" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="end">{duration}</p>
          </div>

          <div className=" flex gap-2">
            {/* image */}
            <div className="imgContner rounded w-32 overflow-hidden ">
              <img src={currentSong?.img} ref={imgRef} alt="" className='rounded  object-cover' />
            </div>

            <div className="info w-[calc(100%-8rem)] flex flex-col items-end gap-2">
              {/* information */}
              <div className="musicInfo flex flex-col w-full   ">
                <p className="music-name font-bold text-lg leading-3">music-name</p>
                <p className="artisc-name font-semibold text-sm ">artisc-name</p>
              </div>

              {/* action icons */}

              <div className="actionIcons flex gap-4 w-full items-center justify-between">

                <SelectIcon name={"empty-heart"} style={{ color: lightpink, fontSize: '25px' }} onClick={() => { }} />
                <SelectIcon name={"backward"} style={{ color: 'gold', fontSize: '25px' }} onClick={() => { LoadSong(-1) }} />
                {
                  isplaying ?
                    <SelectIcon name={"pause"} style={{ color: primary, fontSize: '25px' }} onClick={() => { pausefunc() }} />
                    :
                    <SelectIcon name={"play"} style={{ color: playColor, fontSize: '25px' }} onClick={() => { playfunc() }} />
                }
                <SelectIcon name={"forward"} style={{ color: 'gold', fontSize: '25px' }} onClick={() => { LoadSong(1) }} />
                {
                  IconoptionSwitch()
                }

              </div>
            </div>

          </div>
        </div>
      </>

  )
}



export default MusicPlayer