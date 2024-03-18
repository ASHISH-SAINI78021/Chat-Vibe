const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const main = require("./config.js/db.js");
const authRoute = require("./routes/authRoute.js");
const userRoute = require("./routes/userRoute.js");
const chatRoute = require("./routes/chatRoute.js");
// const main = require("./config.js/db.js");
dotenv.config();

// Creating an instance of the express application
const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}));
app.use(express.json());
app.use(morgan("dev"));



main()
.then(()=> {
    console.log(`connected to database`.bgRed.white);
})
.catch((err)=> {
    console.log(`${err}`.bgCyan.white);
});

// Handling a GET request to the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.use("/api/v1/auth" , authRoute);
app.use("/api/v1/user" , userRoute);
app.use("/api/v1/chat" , chatRoute);


// Specifying the port on which the server will listen

// Starting the server and listening on the specified port

const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=> {
    console.log(`App is listenting on mode on ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white);
})
