const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const donationRoute = require("./routes/donation");
const mongoose = require('mongoose')
const dotenv = require("dotenv");

const Port = 5000

dotenv.config({ path: "./.env" });
mongoose
    .connect(
        process.env.MONGODB_URL_LOCAL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    .then(() => {
        console.log('Db Connected');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use(cors());

app.use("/api/donation",donationRoute); 

app.listen(process.env.Port || 6000, () => {
    console.log(`Server running at port ${Port}`)
}
)
