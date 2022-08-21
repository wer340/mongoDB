db.pets.find({ _id: 2025 });

db.pets.insertOne({
  _id: 2022,
  pet: "cat",
  attributes: [
    { coat: "fur", type: "soft" }, // ! this field get a array
    { defense: "claws", location: "paws", nickname: "murder mittens" },
  ],
  name: "Furball",
});

db.pets.insertOne({
  _id: 1,
  pet: "cat",
  fur: "soft",
  claws: "sharp",
  name: "Furball",
});

db.pets.insertOne({
  _id: 1,
  pet: "cat", // !this field get a  object {}
  attributes: { coat: "soft fur", paws: "cute but deadly" },
  name: "Furball",
});

// !    field:{} and field:[] ✔

db.inspections.insert(
  [
    { _id: 1, test: 1 },
    { _id: 1, test: 2 },
    { _id: 3, test: 3 },
  ],
  { ordered: false }
);
// !ordered: false is render rest doc if look a duplicate id
// * in  ordered: true  is halt process

// ! update way
//mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
//use sample_training
db.zips.find({ zip: "12534" }).pretty();
db.zips.find({ city: "HUDSON" }).pretty();
db.zips.find({ city: "HUDSON" }).count();
db.zips.updateMany({ city: "HUDSON" }, { $inc: { pop: 10 } });
db.zips.updateOne({ zip: "12534" }, { $set: { pop: 17630 } });
db.zips.updateOne({ zip: "12534" }, { $set: { population: 17630 } });
db.grades.find({ student_id: 151, class_id: 339 }).pretty();
db.grades.find({ student_id: 250, class_id: 339 }).pretty();
db.grades.updateOne(
  { student_id: 250, class_id: 339 },
  { $push: { scores: { type: "extra credit", score: 100 } } }
);

db.students.insertOne( { _id: 1, scores: [ 44, 78, 38, 80 ] } 

db.students.updateOne(
   { _id: 1 },
   { $push: { scores: 89 } }
)

// !quiz
{
  "_id": ObjectId("5ec414e5e722bb1f65a25451"),
  "pet": "wolf",
  "domestic?": false,
  "diet": "carnivorous",
  "climate": ["polar", "equatorial", "continental", "mountain"]
 }
