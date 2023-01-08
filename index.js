const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const Port = 3000;

app.get('/', (req ,res) =>{
  res.json({
    name: 'hello world'
  });
});

routerApi(app);

app.listen(Port, () => {
  console.log('server on port ' + Port);
});
