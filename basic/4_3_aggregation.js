db.trips.find({ "$expr": { "$eq": [ "$end station id", "$start station id"] }
              }).count()




db.trips.find({ "$expr": { "$and": [ { "$gt": [ "$tripduration", 1200 ]},
{ "$eq": [ "$end station id", "$start station id" ]}
]}}).count()              


/*
Which of the following statements will find all the companies that have more employees than the year in which they were founded?

*/
{"$expr":{"$gt":["$founded_year","$number_of_employees"]}}
    
//!lab How many companies in the sample_training.companies collection have the same permalink as their twitter_username?

//db.companies.find({"$expr":{"$eq":["$permalink","$twitter_username"]}}).count()
1299