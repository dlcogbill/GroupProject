const mongoose = require("mongoose");

const DBName = "DBName";

mongoose.connect(`mongodb://localhost/${DBName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`You are connected to the database called ${DBName}`)
    })
    .catch((err) => {
        console.log(`you had a problem connecting to ${DBName}. Here is your error:`, err)
    })

