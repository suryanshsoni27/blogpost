const express = require("express");
const axios = require("axios");
const port = 4000;
const cors = require("cors");

let app = express();
app.use(cors())
app.get("/",  (req, res) => {
 axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>res.json(response.data));


return res

    

});

app.listen(port, () => {
  console.log("listening on port", {port});
});
