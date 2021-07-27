const db = require('./db-connection');
module.exports = {
    queryMembers:function(month,day){
        return new Promise(function(resolve, reject){
            db.connection.promise().query(`SELECT * FROM members WHERE MONTH(date_of_birth) = '${month}' AND DAY(date_of_birth) = '${day}';`)
            .then(([rows,fields])=>{
                resolve(rows);
            });
        });
    }
  };