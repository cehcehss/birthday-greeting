const dbQuery = require(`../models/${process.env.DB}-member`);
const moment = require('moment');
const message = require('../utils/message');
module.exports = {
    sendBirthdayGreetingV1:(req,res)=>{
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
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({
                msg: 'Something went wrong!',
                error: err
            });
        });
    },
    sendBirthdayGreetingV2:(req,res)=>{
        const {today} = req.body;
        console.log(today);
        var date = moment(today, 'MM/DD');
        var month = date.format('M');
        var day   = date.format('D');
        dbQuery.queryMembers(month,day).then((members)=>{
            var data = [];
            if(members.length != 0){
                members.forEach(member => {
                    data.push(message.getTailerMadeMessage(member.gender,member.first_name))
                });
            }
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({
                msg: 'Something went wrong!',
                error: err
            });
        });
    },
    sendBirthdayGreetingV3:(req,res)=>{
        const {today} = req.body;
        console.log(today);
        var date = moment(today, 'MM/DD');
        var month = date.format('M');
        var day   = date.format('D');
        dbQuery.queryMembers(month,day).then((members)=>{
            var data = [];
            if(members.length != 0){
                members.forEach(member => {
                    data.push(message.getMessageWithImage(member.date_of_birth,member.first_name))
                });
            }
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({
                msg: 'Something went wrong!',
                error: err
            });
        });
    },
    sendBirthdayGreetingV4:(req,res)=>{
        const {today} = req.body;
        var date = moment(today, 'MM/DD');
        var month = date.format('M');
        var day   = date.format('D');
        dbQuery.queryMembers(month,day).then((members)=>{
            var data = [];
            if(members.length != 0){
                members.forEach(member => {
                    data.push(message.getFullNameMessage(member.first_name,member.last_name));
                });
            }
            console.log(data);
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({
                msg: 'Something went wrong!',
                error: err
            });
        });
    },
    setFireStoreData:async (req,res)=>{
        const data = [{first_name:"Robert",last_name:"Yen",gender:"Male",date_of_birth:"1975-8-8",email:"robert.yen@linecorp.com"},
        {first_name:"Cid",last_name:"Change",gender:"Male",date_of_birth:"1990-10-10",email:"cid.change@linecorp.com"},
        {first_name:"Miki",last_name:"Lai",gender:"Female",date_of_birth:"1993-4-5",email:"miki.lai@linecorp.com"},
        {first_name:"Sherry",last_name:"Chen",gender:"Female",date_of_birth:"1993-8-8",email:"sherry.lai@linecorp.com"},
        {first_name:"Peter",last_name:"Wang",gender:"Male",date_of_birth:"1950-12-22",email:"peter.wang@linecorp.com"}];
        data.forEach(async function(data){
            await dbQuery.addData(data);
        });
    },
    sendBirthdayGreetingV5:(req,res)=>{
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
    },
}