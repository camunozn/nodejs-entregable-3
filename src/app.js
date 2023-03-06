const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/users.routes');
const todoRoutes = require('./routes/todos.routes');

initModels();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log('DB connection successful');
  })
  .catch(error => console.log(error));

db.sync()
  .then(() => console.log('Database synchronized'))
  .catch(error => console.log(error));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
