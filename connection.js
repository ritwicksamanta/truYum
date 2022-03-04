const conn = require('mysql');
const db = conn.createConnection({
    host:"localhost",
    user:"ritwick",
    password:"abcd",
    database:'user_db'
});


/*db.connect((error) => {
    if(error)
        throw error ;
    else 
        console.log("Connection Established...");
})
*/
module.exports = {db};