const express = require('express');

const app = express();

/*connect to database*/
const connect = require('./connection');

console.log(connect.db.connect((error)=> {
    if(error) throw error;
    else console.log('connection established')
}));

app.use(express.static('public/src'));
app.get('/',(req,res) => {
    res.sendFile(__dirname+'/public/src/index.html');
});

app.listen(5000,()=>{
    console.log("Server started on Port 5000");
})