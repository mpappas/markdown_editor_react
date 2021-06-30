const {
  getAllRecords,
  getSpecificRecord,
} = require("../../models/records.model");

function httpGetAllRecords(req, res) {
  return res.status(200).json(getAllRecords());
}

function httpGetSpecificRecord(req, res) {
  const docId = req.params.id;
  return res.status(200).json(getSpecificRecord(docId));
}

module.exports = {
  httpGetAllRecords,
  httpGetSpecificRecord,
};
