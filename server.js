const express = require("express");
const app = express();
const port = 4500

const optionWeb = {
    root: "./file",
    header:{}
}
app.use("/css",express.static('./assets'))
app.use("/love",express.static('./file'))
app.use("/apa",express.static('./file'))
app.get("/",(req,res)=>{
    res.sendFile("./index.html",optionWeb)
});

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})