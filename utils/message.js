module.exports = {
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
                data["discount"] = `We offer special discount ${discountInfo.discount} off for the following items:`;
                data["items"] = `${discountInfo["items"].join(",")}`;
                break;
            case "Female":
                var discountInfo = {
                    "discount": "50%",
                    "items":["Cosmetic","LV Handbags"]
                }
                data["discount"] = `We offer special discount ${discountInfo.discount} off for the following items:`;
                data["items"] = `${discountInfo["items"].join(",")}`;
                break;
        }
        return data
    }
}