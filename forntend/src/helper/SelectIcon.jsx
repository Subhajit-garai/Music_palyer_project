import React from 'react'

import { FaBackward, FaForward, FaPause, FaPlay,FaRegHeart ,FaHeart ,FaHome ,FaPlus } from 'react-icons/fa'
import { RiPlayListLine } from "react-icons/ri";
import { MdOutlineSyncAlt, MdRepeatOne, MdShuffle ,MdDelete } from "react-icons/md";
import { TbArrowBarToDown } from "react-icons/tb";
import { BiSolidLike ,BiSolidDislike,BiDislike, BiLike  } from "react-icons/bi";
import { PiMusicNotesBold } from "react-icons/pi";
import { TbFileMusic } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

import { HiOutlineDotsHorizontal,HiDotsVertical  } from "react-icons/hi";



const SelectIcon = ({ name ,style, onClick}) => {
 
    switch(name){

        case "play": return  <FaPlay style={style} onClick={onClick}/>  
        case "pause": return  <FaPause style={style} onClick={onClick}/>  
        case "forward": return  <FaForward style={style} onClick={onClick}/>  
        case "backward": return  <FaBackward style={style} onClick={onClick}/>  
        case "playlist": return  <RiPlayListLine style={style} onClick={onClick}/>  
        case "shuffle": return  <MdShuffle style={style} onClick={onClick}/>  
        case "repeatone": return  <MdRepeatOne style={style} onClick={onClick}/>  
        case "sync": return  <MdOutlineSyncAlt style={style} onClick={onClick}/>  
        case "empty-heart": return  <FaRegHeart style={style} onClick={onClick}/>  
        case "heart": return  <FaHeart  style={style} onClick={onClick}/>  
        case "download": return  <TbArrowBarToDown  style={style} onClick={onClick}/>  
        case "bold-like": return  <BiSolidLike  style={style} onClick={onClick}/>  
        case "bold-dislike": return  <BiSolidDislike   style={style} onClick={onClick}/>  
        case "dislike": return  <BiDislike  style={style} onClick={onClick}/>  
        case "like": return  <BiLike  style={style} onClick={onClick}/>  
        case "music-notes-bold": return  <PiMusicNotesBold  style={style} onClick={onClick}/>  
        case "music-file": return  <TbFileMusic  style={style} onClick={onClick}/>  
        case "home": return  <FaHome   style={style} onClick={onClick}/>  
        case "ham-menu": return  <GiHamburgerMenu    style={style} onClick={onClick}/>  
        case "simple-plus": return  <FaPlus    style={style} onClick={onClick}/>  
        case "dots-hor": return  <HiOutlineDotsHorizontal    style={style} onClick={onClick}/>  
        case "dots-ver": return  <HiDotsVertical     style={style} onClick={onClick}/>  
        case "delete ": return  <MdDelete      style={style} onClick={onClick}/>  
        default: return null
        
    }
 
}

export default SelectIcon 