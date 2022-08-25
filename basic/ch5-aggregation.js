//mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
//use sample_airbnb
db.listingsAndReviews.find({ "amenities": "Wifi" },
                           { "price": 1, "address": 1, "_id": 0 }).pretty()



db.listingsAndReviews.aggregate([
{ "$match": { "amenities": "Wifi" } },
{ "$project": { "price": 1,
                "address": 1,
                "_id": 0 }}]).pretty()



db.listingsAndReviews.findOne({ },{ "address": 1, "_id": 0 })


    
    db.listingsAndReviews.aggregate([ { "$project": { "address": 1, "_id": 0 }},
{ "$group": { "_id": "$address.country" }}])


db.listingsAndReviews.aggregate([
{ "$project": { "address": 1, "_id": 0 }},
{ "$group": { "_id": "$address.country",
            "count": { "$sum": 1 } } }
])


//!lab1  To complete this exercise connect to your Atlas cluster using the in-browser IDE space at the end of this chapter.

/*What room types are present in the sample_airbnb.listingsAndReviews collection?
{project -->room_type:1}-->{group--> _id: "$room_type","count":{$sum:1}}-->{count-->"count"}
db.listingsAndReviews.aggregate([
    {"$project":{"room_type":1}},
    {"$group":{"_id":"$room_type", "count":{"$sum":1}}},
    {"$count":"count"}
])

*/


