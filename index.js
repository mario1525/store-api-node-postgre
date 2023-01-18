const express = require('express');
const routerApi = require('./routes/index');

const {logErrors, errorHandler} = require('./middlewares/error.handler');

const app = express();
const Port = 3000;

app.use(express.json());

app.get('/', (req ,res) =>{
  res.json({
    name: 'hello world'
  });
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(Port, () => {
  console.log('server on port ' + Port);
});
