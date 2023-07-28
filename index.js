const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser');
const connectDB = require("./data/connect");
const adminRouter = require("./routes/admin");
const postRouter = require("./routes/post");
const categoryRouter = require("./routes/category");
const errorHandler = require("./middlewares/error");
const asyncHandler = require("./middlewares/asyncHandler");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
connectDB();

app.use("/api/", adminRouter);
app.use("/api/post", postRouter);
app.use("/api/category", categoryRouter);

app.use(errorHandler);
app.listen(process.env.PORT, ()=>{
    console.log(`server listen ${process.env.PORT} port`)
});
