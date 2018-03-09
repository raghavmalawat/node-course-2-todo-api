const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDb server');
/*
    db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
*/
    db.collection('Users').insertOne({
        name:'Some random name',
        age:25,
        location:'chennai'
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert user',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.close();
});