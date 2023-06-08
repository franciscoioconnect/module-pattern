import express from 'express';
import routes from './routes.js';
import bodyParser from "body-parser";


const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Express app running on port ${port}!`);
    routes(app);
});