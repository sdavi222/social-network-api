// set up express application with necessary configs and connections
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
// connect to database and start the API on specified port 
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});