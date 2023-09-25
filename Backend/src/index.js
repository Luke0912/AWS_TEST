const express = require('express')
require('dotenv').config();

const cors = require('cors')
const productcontroller = require("./controllers/productcontroller");
const router = express.Router();
const connect = require("./configs/db");
const app = express()
const path  = require('path')

app.use(express.json())
app.use(cors())
app.use(router);

router.use("/product", productcontroller);

const _dirname = path.dirname("")
const buildPath = path.join(_dirname  , "../frontend/build");

app.use(express.static(buildPath))

app.get("/*", function(req, res){
    res.sendFile(
        path.join(__dirname, "../../frontend/build/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})

const port =  process.env.PORT;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening to port ${port}`);
  } catch (error) {
    console.log(error);
    console.log("hello")
  }
});

