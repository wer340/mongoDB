// use sample_airbnb
db.listingsAndReviews.find({ "amenities":
        { "$size": 20, "$all": [ "Internet", "Wifi",  "Kitchen", "Heating",
                                 "Family/kid friendly", "Washer", "Dryer",
                                 "Essentials", "Shampoo", "Hangers",
                                 "Hair dryer", "Iron",
                                 "Laptop friendly workspace" ] } },
                            {"price": 1, "address": 1}).pretty()

db.listingsAndReviews.find({ "amenities": "Wifi" },
{ "price": 1, "address": 1, "_id": 0 }).pretty()                            

db.listingsAndReviews.find({ "amenities": "Wifi" },
                           { "price": 1, "address": 1,
                             "_id": 0, "maximum_nights":0 }).pretty()


db.grades.find({ "class_id": 431 },
{ "scores": { "$elemMatch": { "score": { "$gt": 85 } } }
}).pretty()

db.grades.find({ "scores": { "$elemMatch": { "type": "extra credit" } }
}).pretty()

// !lab
/*
To complete this exercise connect to your Atlas cluster using the in-browser IDE space at the end of this chapter.

How many companies in the sample_training.companies collection have offices in the city of Seattle? 

Copy/paste your answer to the response field.

 ✅ db.companies.find({"offices":{$elemMatch:{"city":"Seattle"}}},{"offices":1}) 117
*/
// !quiz
/*
Which of the following queries will return only the names of companies from the sample_training.companies collection that had exactly 8 funding rounds?
db.companies.find({ "funding_rounds": { "$size": 8 } },
                  { "name": 1, "_id": 0 })
                  */

                  