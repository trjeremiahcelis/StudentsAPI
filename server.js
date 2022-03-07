const express = require('express');
const app = express();
//const app = require('express')()
const bodyParser = require('body-parser');
const cors = require('cors');
/* const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); */

let corsOptions = {
    origin: "*",
}

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//swagger docus
/* app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); */

/* Routes */
const studentsRoute = require('./routes/StudentInfo');

app.use('/students', cors(corsOptions),studentsRoute)

const PORT = 8081

app.listen(PORT, () => {
    console.log("Listening on port: ", PORT)
})