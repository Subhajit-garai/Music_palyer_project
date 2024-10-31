import mongoose, { Schema } from "mongoose";



// add image 
const MusicSchema = new mongoose.Schema({

    originalname:{
        type: String,
        required: true,
    },
    encoding:{
        type: String,
        required: true,
    },
    mimetype:{
        type: String,
        required: true,
    },
    destination:{
        type: String,
        required: true,
    },
    filename:{
        type: String,
        required: true,
    },
    path:{
        type: String,
        required: true,
    },
    size:{
        type: String,
        required: true,
    },
    uploadBy:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },

    // coverImage:{
    //     type: String,
    //     required: true,
    // },


    
})

export const Music =  mongoose.model('Music', MusicSchema);