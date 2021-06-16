const express = require('express');

const app = express();
const port = 3000;


const prefix = 'v1';
const routes = [
    {path:`/${prefix}/sensor`, file:'./api/sensor' },
];

routes.forEach(({path, file}) => {
    console.log(file, path);
    app.use(path, require(file));
});


//Default route
app.get('/', (req, res) => {
    res.send('Running');
});


app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`);
});