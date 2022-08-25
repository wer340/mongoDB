//use sample_training

db.zips.find().sort({ "pop": 1 }).limit(1)

db.zips.find({ "pop": 0 }).count()

db.zips.find().sort({ "pop": -1 }).limit(1)

db.zips.find().sort({ "pop": -1 }).limit(10)

db.zips.find().sort({ "pop": 1, "city": -1 })


//! quiz
/*
Problem:

Which of the following commands will return the name and founding year for the 5 oldest companies in the sample_training.companies collection?


✅db.companies.find({"founded_year":{"$ne":null}},{"name":1,"founded_year":1}).limit(5).sort({"founded_year":1})
✅db.companies.find({"founded_year":{"$ne":null}},{"name":1,"founded_year":1}).sort({"founded_year":1}).limit(5)
*/
//!quiz2
/*In what year was the youngest bike rider from the sample_training.trips collection born?  */1999
