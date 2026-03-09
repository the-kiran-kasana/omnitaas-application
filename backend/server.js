const express = require("express")
const app = express();
const mongoDB = require("./db/mongodb");
mongoDB();
app.use(express.json())

app.listen(3030 , () => {
   console.log("server is running on port 3030");
})




