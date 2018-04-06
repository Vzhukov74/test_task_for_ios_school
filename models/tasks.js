const db = require('../database/db');
let ObjectID = require('mongodb').ObjectID;

const DATABASE_TASKS_COLLECTION_NAME = 'todo_tasks';

exports.all = (cb) => {
  db.get().collection(DATABASE_TASKS_COLLECTION_NAME).find().toArray((error, docs) => {
    cb(error, docs);
  });
};

exports.add = (task, cb) => {
  db.get().collection(DATABASE_TASKS_COLLECTION_NAME).insert(task, (error, result) => {
    cb(error, result);
  })
}
exports.update = (id, data, cb) => {
  db.get().collection(DATABASE_TASKS_COLLECTION_NAME).updateOne(
    { _id: ObjectID(id) },
    {$set: data},
    (error, result) => {
      cb(error, result);
    }
  );
}
exports.delete = (id, cb) => {
  db.get().collection(DATABASE_TASKS_COLLECTION_NAME).deleteOne(
    { _id: ObjectID(id) },
    (error, result) => {
      cb(error, result);
    }
  );
}
