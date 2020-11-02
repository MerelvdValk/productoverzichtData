require('dotenv').config()

// import
const express = require('express')
const cors = require('cors')

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : process.env.MYSQL_PASSWORD,
        database : 'portfolio'
    }
});

//initialize app
const app = express();
const port = 3000;

// set routes
app.use(cors());

app.get('/projecten', async function (req, res) {
    const project = await knex.select('*').from('projecten')
    console.log(project)
    res.json(project)

});

app.listen(port, () => console.log('app is running'));
