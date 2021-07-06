let database = {
  1: {
    textInput: "Example MarkDown 1",
  },
  2: {
    textInput: "Example MarkDown 2",
  },
};

let recordIndex = 2;

function addNewRecord(textInputContent) {
  recordIndex++;

  const newRecord = {
    [recordIndex]: {
      textInput: textInputContent,
    },
  };
  Object.entries(newRecord).forEach(([key, value]) => {
    database[key] = value;
  });

  return { id: recordIndex };
}

function getAllRecords() {
  return database;
}

function getSpecificRecord(docId) {
  let found = false;

  if (!(docId.toString() in database)) {
    return found;
  }

  return database[docId];
}

function updateSpecificRecord(recordToUpdate) {
  let found = false;
  const recordId = recordToUpdate.id;

  if (!(recordId.toString() in database)) {
    return found;
  }

  database[recordId] = { textInput: recordToUpdate.textInput };

  return database[recordId];
}

module.exports = {
  database,
  addNewRecord,
  getAllRecords,
  getSpecificRecord,
  updateSpecificRecord,
};
