const dbQuery = require(`../models/${process.env.DB}-member`);
const moment = require('moment');
const message = require('../utils/message');
var builder = require('xmlbuilder');


module.exports = {
    getMemberByBirthday:(req,res)=>{
        const {today} = req.body;
        console.log(today);
        var date = moment(today, 'MM/DD');
        var month = date.format('M');
        var day   = date.format('D');
        dbQuery.queryMembers(month,day).then((members)=>{
            var data = [];
            if(members.length != 0){
                members.forEach(member => {
                    data.push(message.getSimpleMessage(member.first_name))
                });
            }
            var xml = builder.create('root');
            for(var i=0; i< data.length; i++){
                xml.ele('row')
                .ele('title', data[i]['title']).up()
                .ele('content', data[i]['content']).end();
            }
            var xmldoc = xml.toString({ pretty: true }); 
            res.set('Content-Type', 'text/xml');
            res.status(200).send(xmldoc);
        }).catch((err) => {
            res.status(500);
        });
    }
}