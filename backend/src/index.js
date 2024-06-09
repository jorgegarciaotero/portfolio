//IMPORT DEPENDENCIES
const { connection } = require("./database/connection")
const express = require("express")
const cors = require("cors")
const path = require("path");   

//DATABASE CONNECTION
connection();

//SERVER CREATION
const app = express()
const port = 3900;

//MIDDLEWARE. Executes before any route
app.use(cors())
app.use(express.json())  //receives data as content-type app/json
app.use(express.urlencoded({extended: true}))  //receives data as urlencoded app/json

//ROUTES CONFIG
const mainRoutes = require("./routes/main")

app.use("/main", mainRoutes)

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '../../frontend/client/build')));

// Serve static files from the public folder
app.use('/public', express.static(path.join(__dirname, '../../frontend/client/public')));

// Catch-all handler to serve the React app for any unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/client/build', 'index.html'));
});

//SET SERVER TO LISTEN HTTP REQUESTS
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
