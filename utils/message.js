module.exports = {
    getSimpleMessage:function(name){
        var data = {
            "title":"Happy birthday!",
            "content":`Happy birthday, dear ${name}!`
        };
        return data
    }
}