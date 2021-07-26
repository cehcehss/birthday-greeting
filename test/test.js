const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe('Members APIs',()=>{
    describe("Test POST route /api/birthday-greeting/v2",()=>{
        it("It should return two members",(done)=>{
            const date = "08/08";
            chai.request(server)
                .post("/api/birthday-greeting/v2")
                .send({
                    'today': date
                })
                .end((err,response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(2);
                    response.body[0].should.have.property('discount');
                    response.body[0].should.have.property('items');
                done();
                });
        });
    });
});