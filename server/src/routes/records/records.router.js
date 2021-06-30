const express = require("express");

const {
  httpGetAllRecords,
  httpGetSpecificRecord,
} = require("./records.controller");

const recordsRouter = express.Router();

const database = {
  1: {
    textInput: "Example MarkDown",
  },
};

// Create
// app.post("/create", (req, res) => {
//   const newTextInput = req.body.text;
//   const objectToPush = {
//     id: "2",
//     textInput: newTextInput,
//   };
//   database.push(objectToPush);

//   res.json(objectToPush.id);
// });

// Read
recordsRouter.get("/read", httpGetAllRecords);

recordsRouter.get("/read/:id", httpGetSpecificRecord);

// Update
// app.put("/update", (req, res) => {
//   const docId = req.body.id;
//   database[docId].textInput = req.body.text;
//   res.json(database[docId]);
// });

module.exports = recordsRouter;
