const moment = require("moment");
module.exports = {
    getSimpleMessage:function(name){
        var data = {
            "title":"Subject: Happy birthday!",
            "content":`Happy birthday, dear ${name}!`
        };
        return data
    },
    getTailerMadeMessage:function(gender,name){
        var data = {
            "title":"Subject: Happy birthday!",
            "content":`Happy birthday, dear ${name}!`
        };
        switch(gender){
            case "Male":
                var discountInfo = {
                    "discount": "20%",
                    "items":["White Wine","iPhone X"]
                }
                data["content"] += "<br/>" + `We offer special discount ${discountInfo.discount} off for the following items:` + "<br/>" + `${discountInfo["items"].join(",")}`;
                break;
            case "Female":
                var discountInfo = {
                    "discount": "50%",
                    "items":["Cosmetic","LV Handbags"]
                }
                data["content"] += "<br/>" + `We offer special discount ${discountInfo.discount} off for the following items:` + "<br/>" + `${discountInfo["items"].join(",")}`;
                break;
        }
        return data
    },
    getMessageWithImage:function(birth,name){
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
    },
    getFullNameMessage:function(first_name,last_name){
        var data = {
            "title":"Subject: Happy birthday!",
            "content":`Happy birthday, dear ${last_name}, ${first_name}!`
        };
        return data
    }
}