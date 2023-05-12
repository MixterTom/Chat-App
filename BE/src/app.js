import morgan from "morgan";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import indexRouter from "./routes/router.js";


const app = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use('/api', indexRouter);


export default app;