require('dotenv').config()
const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (err)=> console.log(err.message));
db.once('open', ()=> console.log('connected succesfully with db'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine' , 'ejs')

const porosiRoute = require('./routes/porosite')
app.use('/porosite',porosiRoute)
app.get('/', (req,res) =>{
    res.send('Ballina')
})
app.listen( 3001, () => console.log('server is on...'))