import express from "express";
import morgan from "morgan";
import dateRouter from "./routes/date.router.js";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";

const app = express();
const port = process.env.PORT || 5001;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api", dateRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
