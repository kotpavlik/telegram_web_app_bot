import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import PinkPunkRoutes from './Routes/PinkPunkRoutes.js';
import fileUload from 'express-fileupload';
import cors from 'cors';
import path from 'path'


dotenv.config()
const PORT = 8088
const token = process.env.TOKEN;
const app = express()


app.use(cors({
    origin: ["https://b7cc-51-158-62-88.ngrok-free.app", "http://localhost:3000"],
    credentials: true,
    headers: {
        'ngrok-skip-browser-warning': true
    }
}))
app.use(express.json())
app.use(express.static(path.resolve(process.cwd(), 'static')))
app.use(fileUload({}))
app.use('/v1', PinkPunkRoutes)
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser());





const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {})

        const bot = new TelegramBot(token, {
            polling: true
        });
        bot.on('message', async (msg) => {
            const chatId = msg.chat.id;
            const user_name = msg.from.username
            const text = msg.text

            if (text === '/start') {
                await bot.sendMessage(chatId, `Привет ${user_name}🤘🏽
Ты в telegram боте лучшего Беларуского бренда Pink Punk🤘🏽 `, {});
            }
        });


        app.listen(PORT, () => console.log(`we are listen ${PORT}`))

    } catch (error) {
        console.log(`this don't work - ${error} `)
    }
}
start()