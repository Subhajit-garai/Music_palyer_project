
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import { DbConnection } from './src/db/db.js';
import { userRouter } from './src/routes/user.router.js';
import { musicRouter } from './src/routes/music.router.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())


app.use("/api/v1/user",userRouter)
app.use("/api/v1/music",musicRouter)

DbConnection().then(() => {

    app.listen(process.env.PORT, () => {
        console.log(`server is running at port :${process.env.PORT} connecting to :${process.env.Origin_host}`);
    });
})
