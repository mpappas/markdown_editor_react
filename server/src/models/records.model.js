const database = {
  1: {
    textInput: "Example MarkDown 1",
  },
  2: {
    textInput: "Example MarkDown 2",
  },
};

function getAllRecords() {
  return database;
}

function getSpecificRecord(docId) {
  return database[docId];
}

module.exports = {
  getAllRecords,
  getSpecificRecord,
};
