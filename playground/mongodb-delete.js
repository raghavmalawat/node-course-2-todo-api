const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDb server');

    db.collection('Users').deleteMany({name:'raghav malawat'});
});