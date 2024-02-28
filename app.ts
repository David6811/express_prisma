import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';
const cors = require('cors');


const app = express();
app.use(cors());
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

