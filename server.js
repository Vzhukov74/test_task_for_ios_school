let express = require('express');
let bodyParser = require('body-parser');
const tasksController = require('./controllers/tasks');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const db = require('./database/db');
const DATABASE_URL = 'mongodb://mongodb:27017/test_task_for_ios_school_db';
//test_task_for_ios_school_db
app.get('/test', (req, res) => {
  res.send('test')
})
app.get('/', tasksController.all);
app.post('/', tasksController.add);
app.put('/', tasksController.update);
app.delete('/', tasksController.delete);

db.connect(DATABASE_URL, (error) => {
  if (error) {
    return console.log(error);
  }
  app.listen(8080, () => {
    console.log('app listening on port 8080');
  });
})
