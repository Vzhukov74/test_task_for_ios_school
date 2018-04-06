let mongoClient = require('mongodb').MongoClient;

let state = {
  db: null
}

exports.connect = (url, done) => {
  if (state.db) {
    return done();
  }

  mongoClient.connect(url, (error, database) => {
    if (error) {
      return done(error);
    }
    state.db = database.db('test_task_for_ios_school_db');
    done();
  });
};

exports.get = () => {
  return state.db;
};
