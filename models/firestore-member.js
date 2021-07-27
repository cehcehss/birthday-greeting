const db = require('./db-connection');
module.exports = {
    queryMembers:function(month,day){
        return new Promise(function(resolve,reject){
            db.collection(process.env.FIRESTORE_COLLECTION)
            .get().then(members=>{
                var data = [];
                members.forEach(function(member){
                    if(member.data().date_of_birth.includes(`${month}-${day}`)){
                        data.push(member.data());
                    }
                });
                resolve(data);
            });
        });
    },
    addData:function(data){
        return db.collection(process.env.FIRESTORE_COLLECTION).add(data);
    }
  };