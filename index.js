const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const routerApi = require('./routes/index');

const swaggerDoc = require('./swagger.json');
const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['https//:localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.json({
    name: 'hello world docker ',
  });
});
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(Port, () => {
  console.log(`server on portt ${Port}`);
});
