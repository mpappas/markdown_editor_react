"use strict";

const request = require("supertest");
const app = require("../src/app");
const server = require("../src/server");

let { database } = require("./../src/models/records.model");

afterAll(async () => await server.stop());

describe("GET /read Get Records", () => {
  test("should get all records and respond with 200", async () => {
    const response = await request(app)
      .get("/read")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(response.body).toMatchObject(database);
  });

  test("should get a specific record given as param and respond with 200", async () => {
    const recordToRetrieve = 1;
    const response = await request(app)
      .get(`/read/${recordToRetrieve}`)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(response.body).toMatchObject(database[recordToRetrieve]);
  });

  test("should respond with 400 when id to update is not found", async () => {
    const recordToRetrieve = 5;
    const response = await request(app)
      .get(`/read/${recordToRetrieve}`)
      .expect(400)
      .expect("Content-Type", /json/);

    expect(response.body).toMatchObject({ error: "Record not found" });
  });
});

describe("POST /read Create Records", () => {
  test("should create a new record and respond with 200", async () => {
    const response = await request(app)
      .post("/read")
      .send({
        textInput: "Test Input",
      })
      .expect(201)
      .expect("Content-Type", /json/);

    expect(response.body).not.toBeNaN();
  });

  test("should respond with 400 when missing content for the record", async () => {
    const response = await request(app)
      .post("/read")
      .send({})
      .expect(400)
      .expect("Content-Type", /json/);

    expect(response.body).toMatchObject({
      error: "Missing required content of the record",
    });
  });
});

describe("PUT /read Update Records", () => {
  test("should update a specific record and respond with 200", async () => {
    const response = await request(app)
      .put("/read")
      .send({
        id: "1",
        textInput: "Test Input",
      })
      .expect(200)
      .expect("Content-Type", /json/);

    expect(response.body.textInput).toBe("Test Input");
  });

  test("should respond with 400 when id to update is not found", async () => {
    const response = await request(app)
      .put("/read")
      .send({
        id: "5",
        textInput: "Test Input",
      })
      .expect(400)
      .expect("Content-Type", /json/);

    expect(response.body).toMatchObject({ error: "Record not found" });
  });
});
