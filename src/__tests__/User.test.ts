import  request  from "supertest";
import { getConnection } from "typeorm";
import { app } from '../app';

import createConnection from '../database';

describe("User", ()=> {
    beforeAll(async()=>{
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();

    });

    it("should be able to create a new user", async()=>{
        const response = await request(app).post("/users").send({
            name: "User Example",
            email: "user@example.com.br"
        })
        expect(response.status).toBe(201);
    })
    it("should be not able to create a new user with exits email", async()=>{
        const response = await request(app).post("/users").send({
            name: "User Example",
            email: "user@example.com.br"
        })
        expect(response.status).toBe(400);
    })

})

