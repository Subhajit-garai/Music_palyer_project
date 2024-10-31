import multer from "multer";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';


export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const myFilepath =  path.join(__dirname,"../../files")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        if(!fs.existsSync(myFilepath)){
            fs.mkdirSync(myFilepath)
        }
      cb(null, myFilepath)
    },
    
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() *1E9)
      cb(null, file.originalname.slice(0,20) + '-' + uniqueSuffix)
    }
  })
  
export const upload = multer({ storage: storage })