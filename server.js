let express = require('express');
let bodyParser = require('body-parser');
const tasksController = require('./controllers/tasks');

const MONGO_NAME_STR = 'mongodb://mongo/' + 'test_task_for_ios_school_db';

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const db = require('./database/db');

app.get('/', tasksController.all);
app.post('/', tasksController.add);
app.put('/', tasksController.update);
app.delete('/', tasksController.delete);

db.connect(MONGO_NAME_STR, (error) => {
  if (error) {
    return console.log(error);
  }
  app.listen(8080, () => {
    console.log('app listening on port 8080');
  });
})
