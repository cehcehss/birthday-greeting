module.exports = {
    getSimpleMessage:function(name){
        var data = {
            "title":"Subject: Happy birthday!",
            "content":`Happy birthday, dear ${name}!`
        };
        return data
    }
}