const express = require("express");

const {
  httpAddNewRecord,
  httpGetAllRecords,
  httpGetSpecificRecord,
  httpUpdateSpecificRecord,
} = require("./records.controller");

const recordsRouter = express.Router();

// Create
recordsRouter.post("/read", httpAddNewRecord);

// Read

// Get all records
recordsRouter.get("/read", httpGetAllRecords);

// Get specific record
recordsRouter.get("/read/:id", httpGetSpecificRecord);

// Update a record
recordsRouter.put("/read", httpUpdateSpecificRecord);

module.exports = recordsRouter;
