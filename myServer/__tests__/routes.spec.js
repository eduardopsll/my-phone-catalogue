import request from "supertest";
import app from "../index.js";
import phones from "../phones.json";

describe("GET /phones", () => {
  it("should respond with phones json", () => {
    request(app)
      .get("/phones")
      .send(phones)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(phones);
      });
  });
});
