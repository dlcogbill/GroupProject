const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

require("./config/mongoose.config");
require("./routes/bet.routes")(app);

app.listen(port, () => {
    console.log(`Listen on Port: ${port}` )
})
