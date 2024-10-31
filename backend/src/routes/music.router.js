
import {Router} from "express"
import { sendMusicfile ,uploadMusicfile, getAllMusicData} from "../controller/music.controller.js"
import { upload } from "../utils/multer.utils.js";

export const musicRouter =  Router()


// musicRouter.get('id/:id',sendMusicfile);
musicRouter.get('/download/:id',sendMusicfile);
musicRouter.get('/all',getAllMusicData);
musicRouter.get('/catagory/:catagory',sendMusicfile);

musicRouter.post('/upload',upload.single('file'),uploadMusicfile);



