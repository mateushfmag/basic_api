const app = require('./config/app')
require('dotenv/config')

const port = process.env.PORT || 8080

app.listen(port, () => {
 console.log("Server running on localhost:8080");
}); 
