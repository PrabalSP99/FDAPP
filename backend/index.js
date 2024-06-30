const express =require('express');
const mongoose = require('mongoose');
const path = require(('path'))
var bodyParser = require('body-parser');
const app= express();
const cors = require('cors')

require("dotenv").config();

// middleware
// const corsOptions = {
//     origin: "http://localhost:3000" // frontend URI (ReactJS)
// }
// app.use(express.json());
// app.use(cors(corsOptions));

// connect MongoDB
mongoose.connect(process.env.mongodb).then(() => {
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});



app.use(cors());
app.use(cors(
    {
      origin: "http://localhost:3000",
      methods: ["POST", "GET", "DELETE", "PUT"],
      credentials: true
    }
  ));
app.use(bodyParser.json());
app.use('/', require('./routes/index'));


// app.listen(port,(err)=>{
//     if(err){
//         console.log(`error: ${err}`);
//         return;
//     }
//     console.log(`server running on port : ${port}`)
// })







