import express from 'express'
const app = express()
import taskRoute from './routes/tasksRouters.js'
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const PORT = process.env.PORT || 5001

//middlewares
app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}))

app.use("/api/tasks",taskRoute)

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
    })
})
