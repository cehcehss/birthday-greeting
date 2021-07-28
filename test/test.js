const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect  = require('chai').expect;
const chaiXml = require('chai-xml');

chai.should();
chai.use(chaiHttp);

describe('Members APIs',()=>{
    describe("Test POST route /api/birthday-greeting/v5",()=>{
        it("It should return two members",(done)=>{
            const date = "08/08";
            chai.request(server)
                .post("/api/birthday-greeting/v5")
                .send({
                    'today': date
                })
                .end((err,response)=>{
                    response.should.have.status(200);
                done();
                });
        });
    });
});