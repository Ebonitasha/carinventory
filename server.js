const express = require('express')
const app = express()
const morgan = require('morgan')
const mogoose = require('mongoose')
const { default: mongoose } = require('mongoose')

mongoose.set('strictQuery', true)

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(`mongodb+srv://ebonitasha:Purplekisses2@cluster88.gfnymjn.mongodb.net/?retryWrites=true&w=majority`,

    () => console.log("Connected to DB") 
)

app.use("/carInventory", require("./routes/carInventoryRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(5000, () =>{
    console.log('Connected to server')
})