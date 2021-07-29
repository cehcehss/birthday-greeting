const moment = require("moment");
module.exports = {
    getMessage:function(birth,name){
        var data = {
            "title":"Subject: Happy birthday!",
            "content":`Happy birthday, dear ${name}!`
        };
        if(module.exports.isOverCertainAge(birth,49)){
            data["content"] += `<div><img src="/images/cake.png" alt="" width="400px"></div>`
        }
        return data
    },
    isOverCertainAge:function(birth,checkAge){
        var today = moment();
        var birth = moment(birth, 'YYYY-MM-DD');
        var age = moment.duration(today.diff(birth));
        var years = age.years();
        return years > checkAge;
    }
}