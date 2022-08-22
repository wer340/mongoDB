//mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
//use sample_training
/*db.routes.find({ "$and": [ { "$or" :[ { "dst_airport": "KZN" },
                                    { "src_airport": "KZN" }
                                  ] },
                          { "$or" :[ { "airplane": "CR2" },
                                     { "airplane": "A81" } ] }
                         ]}).pretty()

 */

//!quiz 

/*To complete this exercise connect to your Atlas cluster using the in-browser IDE space at the end of this chapter.

How many businesses in the sample_training.inspections dataset have the inspection result "Out of Business" and belong to the "Home Improvement Contractor - 100" sector?

Enter the exact numeric value of the result that you get into the response field. */

// {
//     sector :"Home Improvement Contractor - 100",
//     result :"Out of Business"
// }

// !quiz2
/*Which is the most succinct query to return all documents from the sample_training.inspections collection where the inspection date is either "Feb 20 2015", or "Feb 21 2015" and the company is not part of the "Cigarette Retail Dealer - 127" sector?

1️⃣db.inspections.find(
{ "$or": [ { "date": "Feb 20 2015" },
{ "date": "Feb 21 2015" }],
"$not": { "sector": "Cigarette Retail Dealer - 127" }}).pretty() 

2️⃣✅db.inspections.find( 
    { "$or": [ { "date": "Feb 20 2015" },{ "date": "Feb 21 2015" } ], 
    "sector": { "$ne": "Cigarette Retail Dealer - 127" } 
    }
    ).pretty()
$ne ==>comparison operators  means  ({ operation logic,operation comparison  })
3️⃣db.inspections.find(
{ "$and": [
{ "$or": [
{ "date": "Feb 20 2015" },
{ "date": "Feb 21 2015" } ] },
{"sector": { "$ne":"Cigarette Retail Dealer - 127" }}]
}).pretty() 

*/

// !lab1 logic operator
db.zips.updateMany({ "city": "HUDSON" }, { "$inc": { "pop": -10 } })

/*How many zips in the sample_training.zips dataset are neither over-populated nor under-populated?

In this case, we consider population of more than 1,000,000 to be over- populated and less than 5,000 to be under-populated.

Copy/paste the exact numeric value (without double quotes) of the result that you get into the response field.
db.zips.find(
    { "$nor": [{ "pop": {$lt:5000} },{ "pop": {$gt:1000000} } ] }
    ).pretty() 

    11193*/

// !lab2 
/* How many companies in the sample_training.companies dataset were

either founded in 2004

[and] either have the social category_code [or] web category_code,
[or] were founded in the month of October

[and] also either have the social category_code [or] web category_code?
Copy/paste the exact numeric value (without double quotes) of the result that you get into the response field. 
✅db.companies.find(
    {$or:[{$and:[{"founded_year":2004},{$or:[{"category_code":"social"},{"category_code":"web"}]}]},{$and:[{"founded_month":10},{$or:[{"category_code":"social"},{"category_code":"web"}]}]}]}).count() 149

    */
/* ✔more complicated 
{$or:[{$and:[{"founded_year":2004},{$or:[{"category_code":"social"},{"category_code":"web"}]}]},{$and:[{"founded_month":10},{$or:[{"category_code":"social"},{"category_code":"web"}]}]}],"number_of_employees":{$gt:300}} */
// *============================
