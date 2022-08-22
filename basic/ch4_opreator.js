//mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
//use sample_training
//db.trips.find({ "tripduration": { "$lte" : 70 },
//  "usertype": { "$ne": "Subscriber" } }).pretty()

//db.trips.find({ "tripduration": { "$lte" : 70 },
//"usertype": { "$eq": "Customer" }}).pretty()

//db.trips.find({ "tripduration": { "$lte" : 70 },
//               "usertype": "Customer" }).pretty()

// !lab1
// To complete this exercise connect to your Atlas cluster using the in-browser IDE space at the end of this chapter.

//How many documents in the aus.zips collection have fewer than 1000 people listed in the pop field?

//Copy/paste the exact numeric value (without double quotes) of the result that you get into the response field.

//db.trips.find({ "pop": { "$lte" : 1000 }}).count()  //8065   8070
//
// !Lab 2
//To complete this exercise connect to your Atlas cluster using the in-browser IDE space at the end of this chapter.

//What is the difference between the number of people born in 1998 and the number of people born after 1998 in the sample_training.trips collection?

//Enter the exact numeric value of the result that you get into the response field.
db.trips.find({ "birth year": { $eq: 1998 } }).count(); //expect ==>12
db.trips.find({ "birth year": { $gt: 1998 } }).count(); //expect ==>18

//!Lab 3
//To complete this exercise connect to your Atlas cluster using the in-browser IDE space at the end of this chapter.

//Using the sample_training.routes collection find out which of the following statements will return all routes that have at least one stop in them?
