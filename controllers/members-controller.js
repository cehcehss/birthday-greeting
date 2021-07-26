const db = require('../models');
const moment = require('moment');
const Member = db.Member;
const { QueryTypes } = require('sequelize');
module.exports = {
    getMemberByBirthday:(req,res)=>{
        const {today} = req.body;
        var date = moment(today, 'MM/DD');
    
        var month = date.format('M');
        var day   = date.format('D');
     
        const getMembers = async()=>{
            let result = await db.sequelize.query(`SELECT * FROM members WHERE MONTH(date_of_birth) = '${month}' AND DAY(date_of_birth) = '${day}';`, { type: QueryTypes.SELECT });
            return result;
        }
        getMembers().then((members)=>{
            var data = [];
            if(members.length != 0){
                members.forEach(member => {
                    data.push({"title":"Subject: Happy birthday!","content":`Happy birthday, dear ${member.first_name}!`})
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