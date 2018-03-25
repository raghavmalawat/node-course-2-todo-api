const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDb server');

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectId('5ab7961d4407791851ed93b0')
    },
    {
        $set:{name:'raghav'},
        $set:{ age : 19 }
    },    
    {
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

});