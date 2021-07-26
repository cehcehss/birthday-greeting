const moment = require("moment");
module.exports = {
    getMessage:function(birth,name){
        var data = {
            "title":"Happy birthday!",
            "content":`Happy birthday, dear ${name}!`
        };
        if(module.exports.isOverCertainAge(birth,49)){
            data["image"] = true;
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