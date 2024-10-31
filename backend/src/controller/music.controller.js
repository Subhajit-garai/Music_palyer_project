import { Music } from "../models/music.model.js";
import { __dirname } from "../utils/multer.utils.js";
import path from 'path'
import fs from 'fs'




export const sendMusicfile = async(req, res) => {

    let id = req.params.id;
    let file  = await Music.findById(id);

    if(file){
        console.log("Music file");
        
        // create a ReadStream
        let stream  = fs.createReadStream(file.path);

        stream.on("data", (chunk) =>{
            res.write(chunk);
        });

        stream.on("end", ()=>{
            res.end();
        });

    }else{
        res.json({success: false ,message: "File not found"});
    }
}


export const uploadMusicfile = async (req, res) => {

 try {
    let file = req.file    
    // file.uploadBy = req.user._id;    
    if (file.size > 0) {
        let music = await Music.create(file);

        if (music._id) {
            res.json({ success: true, music: music._id })
        }
    }

 } catch (error) {
    console.log("error from uploadMusicfile ",error);
    
 }

}


export const  getAllMusicData = async (req,res) =>{

     let musicData = await Music.find({})

     if(musicData){
        return  res.json({success: true, data:musicData});
     }

     res.json({success: false, message:"Dont have music file "});
}


// console.log(mypath);
