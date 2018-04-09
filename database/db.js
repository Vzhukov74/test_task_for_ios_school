let mongoClient = require('mongodb').MongoClient;

const DATABASE_NAME = 'test_task_for_ios_school_db';

let state = {
  db: null
}

exports.connect = (url, done) => {
  if (state.db) {
    return done();
  }

  mongoClient.connect(url, {auto_reconnect:true}, (error, database) => {
    if (error) {
      return done(error);
    }
    state.db = database.db(DATABASE_NAME);
    done();
  });
};

exports.get = () => {
  return state.db;
};
