use sample_training

db.trips.findOne({ "start station location.type": "Point" })

db.companies.find({ "relationships.0.person.last_name": "Zuckerberg" },
                  { "name": 1 }).pretty()

db.companies.find({ "relationships.0.person.first_name": "Mark",
                    "relationships.0.title": { "$regex": "CEO" } },
                  { "name": 1 }).count()


db.companies.find({ "relationships.0.person.first_name": "Mark",
                    "relationships.0.title": {"$regex": "CEO" } },
                  { "name": 1 }).pretty()  52

db.companies.find({ "relationships":
                      { "$elemMatch": { "is_past": true,
                                        "person.first_name": "Mark" } } },
                  { "name": 1 }).pretty()   256

db.companies.find({ "relationships":
                      { "$elemMatch": { "is_past": true,
                                        "person.first_name": "Mark" } } },
                  { "name": 1 }).count()

/*To complete this exercise connect to your Atlas cluster using the in-browser IDE space at the end of this chapter.

How many trips in the sample_training.trips collection started at stations that are to the west of the -74 longitude coordinate?

Longitude decreases in value as you move west.

Note: We always list the longitude first and then latitude in the coordinate pairs; i.e.

<field_name>: [ <longitude>, <latitude> ]

✅db.trips.find({"start station location.coordinates.0":{$lte:-74}}).count() 
1928
*/
//!lab 2
/*How many inspections from the sample_training.inspections collection were conducted in the city of NEW YORK?
db.inspections.find({"address.city":"NEW YORK"}).count() 18279
*/