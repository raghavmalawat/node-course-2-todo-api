const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDb server');

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectId('5aa28861233c8f2818a7d5c5')
    },
    
    {
        $set:{name:'raghav'}
    ,
    
        $inc:{ age : 1 }
    },
    
    {
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

});