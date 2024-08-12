import express from "express";
import { config } from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import cors from "cors";
import studentRouter from "./router/studentRouter.js";
import teacherRouter from "./router/teacherRouter.js";
import assignmentRouter from "./router/assignmentRouter.js";
import announcementRouter from "./router/announcementRouter.js";
import classRouter from "./router/classRouter.js";
import libraryRouter from "./router/libraryRouter.js";
import eventRouter from "./router/eventsRouter.js";
import examRouter from "./router/examRouter.js";
import attendanceRouter from "./router/attendanceRouter.js";

import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
config({path: "./config/config.env"});

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET" , "POST", "PUT", "DELETE"],
    })
);

app.use((err, req, res, next) =>{
    errorHandler(err, req, res, next)
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/vi/students",studentRouter);
app.use("/api/vi/teachers",teacherRouter);
app.use("/api/vi/assignments",assignmentRouter);
app.use("/api/vi/announcements",announcementRouter);
app.use("/api/vi/class",classRouter);
app.use("/api/vi/library",libraryRouter);
app.use("/api/vi/events",eventRouter);
app.use("/api/vi/exams",examRouter);
app.use("/api/vi/attendance",attendanceRouter);


dbConnection();

export default app;

// 06:59