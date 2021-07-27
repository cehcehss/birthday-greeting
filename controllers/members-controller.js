const dbQuery = require(`../models/${process.env.DB}-member`);
const moment = require('moment');
const message = require('../utils/message');
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
                    data.push(message.getMessage(member.date_of_birth,member.first_name))
                });
            }
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({
                msg: 'Something went wrong!',
                error: err
            });
        });
    }
}