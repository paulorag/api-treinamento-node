const request = require("supertest");
const app = require("./app");

describe("GET /status", () => {
    it("deve retornar status 200 e uma mensagem de status ok", async () => {
        const response = await request(app).get("/status");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status: "ok" });
    });
});

describe("GET /users", () => {
    it("deve retornar status 200 e uma lsita de usuários", async () => {
        const response = await request(app).get("/users");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("nome");
    });
});
