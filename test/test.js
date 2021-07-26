const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.should();
chai.use(chaiHttp);

describe('Members APIs',()=>{
    describe("Test POST route /api/birthday-greeting/v3",()=>{
        it("It should return one member with image property",(done)=>{
            const date = "12/22";
            chai.request(server)
                .post("/api/birthday-greeting/v3")
                .send({
                    'today': date
                })
                .end((err,response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body[0].should.have.property('image');
                done();
                });
        });
    });
});