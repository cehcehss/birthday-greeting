const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.should();
chai.use(chaiHttp);

describe('Members APIs',()=>{
    describe("Test POST route /api/birthday-greeting/v4",()=>{
        it("It should return one member with image property",(done)=>{
            const date = "08/08";
            chai.request(server)
                .post("/api/birthday-greeting/v4")
                .send({
                    'today': date
                })
                .end((err,response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                done();
                });
        });
    });
});