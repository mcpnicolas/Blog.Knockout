/*
define(['mongodb'], function (mongodb) {

    function connectMongo() {

        var self = this;

        //self.co = require(co);
        //self.MongoDB = require(mongodb);

        //self.MongoClient = mongodb.MongoClient;

        self.db = new MongoDB("mongodb://localhost:27017/local");

        db.on('error', err => {
            console.error(err);
        });

        db.ready(() => {
            co(function () {
                self.result = db.collection('blog_data').find().toArray();
                console.log(result);
            }).catch(err => {
                console.log(err);
            });
        });

        
        MongoClient.connect("mongodb://localhost:27017/local", function (err, db) {
            if (!err) {
                console.log("Successfully connected to blog_data");
            }
        
            self.blogCollection = db.collection('blog_data');

        });
        
        return self;
    }
    
    return connectMongo();
});

*/
