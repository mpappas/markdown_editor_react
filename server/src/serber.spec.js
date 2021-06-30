const request = require("supertest");
const app = require("./server");

describe("Test POST /create a new file in the database", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/read/:id");
    expect(response.status).toBe(200);
  });
});

test("it works", () => {});
