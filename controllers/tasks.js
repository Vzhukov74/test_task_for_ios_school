const Tasks = require('../models/tasks');

exports.all = (req, res) => {
  Tasks.all((error, docs) => {
    if (error) {
      console.log(error());
      res.sendStatus(500);
    } else {
      res.send(docs);
    }
  });
};

exports.add = (req, res) => {
  if ((req.body.title === undefined) ||
      (req.body.text === undefined)) {
    return res.sendStatus(400);
  }

  let task = {
    title: req.body.title,
    text: req.body.text,
    date_create: Date.now(),
    date_update: Date.now(),
  };

  Tasks.add(task, (error, result) => {
    if (error) {
        console.log(error);
        res.sendStatus(500);
    } else {
      res.send(task);
    }
  });
};

exports.update = (req, res) => {
  if ((req.body.title === undefined) ||
      (req.body.text === undefined) ||
      (req.body.id === undefined)) {
    return res.sendStatus(400);
  }

  let data = {title: req.body.title,
              text: req.body.text,
              date_update: Date.now()};

  Tasks.update(req.body.id, data, (error, result) => {
    if (error) {
        console.log(error);
        res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

exports.delete = (req, res) => {
  if (req.body.id === undefined) {
    return res.sendStatus(400);
  }

  Tasks.delete(req.body.id, (error, result) => {
    if (error) {
        console.log(error);
        res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};
