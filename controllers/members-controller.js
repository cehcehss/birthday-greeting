const db = require('../models/db-connection');
const moment = require('moment');
const message = require('../utils/message');
module.exports = {
    getMemberByBirthday:(req,res)=>{
        const {today} = req.body;
        var date = moment(today, 'MM/DD');
        var month = date.format('M');
        var day   = date.format('D');
        var data = [];

        db
        .get().then((members)=>{
            members.forEach((member) => {
                var memberData = member.data();
                if(memberData.date_of_birth.includes(`${month}-${day}`)){
                    data.push(message.getFullNameMessage(memberData.first_name,memberData.last_name));
                }
            });
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({
                msg: 'Something went wrong!',
                error: err
            });
        });
    },
    setData:async (req,res)=>{
        const data = [{first_name:"Robert",last_name:"Yen",gender:"Male",date_of_birth:"1975-8-8",email:"robert.yen@linecorp.com"},
        {first_name:"Cid",last_name:"Change",gender:"Male",date_of_birth:"1990-10-10",email:"cid.change@linecorp.com"},
        {first_name:"Miki",last_name:"Lai",gender:"Female",date_of_birth:"1993-4-5",email:"miki.lai@linecorp.com"},
        {first_name:"Sherry",last_name:"Chen",gender:"Female",date_of_birth:"1993-8-8",email:"sherry.lai@linecorp.com"},
        {first_name:"Peter",last_name:"Wang",gender:"Male",date_of_birth:"1950-12-22",email:"peter.wang@linecorp.com"}];
        data.forEach(async function(data){
            await db.add(data);
        });
    }
}