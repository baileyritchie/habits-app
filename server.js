/*
include:
1. connect to db
2. imports routes 
3. middleware
4. last error catching route
*/
const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const createError = require('http-errors');
const asyncHandler = require('express-async-handler');
const bodyParser = require('body-parser')
const db = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_DB_URL;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

try {
  (async () => {
    await db.connect(MONGO_URI, {
      useNewUrlParser:true,
      useUnifiedTopology: true,
      useCreateIndex:true
    });
  })();
} catch (err) {
  console.log(`db failed to connect: ${err}`);
}

app.get('/',asyncHandler((req,res) => {
  res.send('Hello Testing Root')
})
);

app.use('/api',routes);

/* generic 404 error */
app.use((req, res, next) => {
  next(createError(404,"Route not found"))
})

/* final error handler */
app.use((error,req,res,next) => {
  res.status(error.status || 500);
  console.log(error);
  res.send({
    status: error.status,
    message: error.message,
    stack: error.status
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost/${PORT}`);
});








