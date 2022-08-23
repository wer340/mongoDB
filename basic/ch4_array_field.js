//mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
//use sample_airbnb
db.listingsAndReviews.find({ "amenities": {
    "$size": 20,
    "$all": [ "Internet", "Wifi",  "Kitchen",
             "Heating", "Family/kid friendly",
             "Washer", "Dryer", "Essentials",
             "Shampoo", "Hangers",
             "Hair dryer", "Iron",
             "Laptop friendly workspace" ]
           }
}).pretty()
// !lab1 
/*To complete this exercise connect to your Atlas cluster using the in-browser IDE space at the end of this chapter.

What is the name of the listing in the sample_airbnb.listingsAndReviews dataset that accommodates more than 6 people and has exactly 50 reviews?

Copy/Paste the value of the "name" field into the response field without quotation marks.
*/
//✅{"accommodates":{$gt:6},"reviews":{$size:50}}
// !lab2
/*Using the sample_airbnb.listingsAndReviews collection find out how many documents have the "property_type" "House", and include "Changing table" as one of the "amenities"?

Enter the number of results to the response field.
✅{"property_type":"House","amenities":"Changing table"}  11
*/
//!quiz db.listingsAndReviews.find(
  /* 
  Which of the following queries will return all listings that have "Free parking on premises", "Air conditioning", and "Wifi" as part of their amenities, and have at least 2 bedrooms in the sample_airbnb.listingsAndReviews collection?
  
  { "amenities":
  { "$all": [ "Free parking on premises", "Wifi", "Air
    conditioning" ] }, "bedrooms": { "$gte":  2 } } ).pretty()  
    
  ❌ wrong method
   db.listingsAndReviews.find(
  { "amenities": "Free parking on premises", "amenities": "Wifi",
    "amenities": "Air conditioning", "bedrooms": { "$gte": 2 }
  }).pretty() 
     
    */
