const express = require("express");
require("dotenv").config();
require("./db/connectDB");
const app = express();

const port = process.env.PORT;

app.use(express.json())

const studentRoute = require("./routes/studentRoute")
app.use("/student", studentRoute)

const teacherRoute = require("./routes/teacherRoute")
app.use("/teacher", teacherRoute )


app.listen(port, () => {
    console.log("Server is running on ",)
})