const {
  addNewRecord,
  getAllRecords,
  getSpecificRecord,
  updateSpecificRecord,
} = require("../../models/records.model");

function httpAddNewRecord(req, res) {
  const record = req.body;

  if (!record.textInput) {
    return res.status(400).json({
      error: "Missing required content of the record",
    });
  }

  const recordId = addNewRecord(record.textInput);
  return res.status(201).json(recordId);
}

function httpGetAllRecords(req, res) {
  return res.status(200).json(getAllRecords());
}

function httpGetSpecificRecord(req, res) {
  const docId = req.params.id;

  const getSpecificRecordResponse = getSpecificRecord(docId);
  if (!getSpecificRecordResponse) {
    return res.status(400).json({ error: "Record not found" });
  }

  return res.status(200).json(getSpecificRecordResponse);
}

function httpUpdateSpecificRecord(req, res) {
  const recordToUpdate = req.body;

  const updateRecord = updateSpecificRecord(recordToUpdate);

  if (!updateRecord) {
    return res.status(400).json({ error: "Record not found" });
  }
  return res.status(200).json(updateRecord);
}

module.exports = {
  httpAddNewRecord,
  httpGetAllRecords,
  httpGetSpecificRecord,
  httpUpdateSpecificRecord,
};
