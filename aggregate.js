// aggregation

// match 
// db.practice.aggregate([
//     { $match: { gender: 'Male', age: { $gt: 18 } } },
//     { $project: { email: 1 } }
// ])


// addfield 
// db.practice.aggregate([
//     {
//         $addFields: {
//             salary: {
//                 $toInt: {$floor: { $multiply: [{$rand: {}}, 10000] }}
//             }
//         }
//     },
//     {$project: { salary: 1 }}

//     // $out or $marge use korle add filed data ta save hoye new collection make hobe
// ])


// group
// db.practice.aggregate([
//     {
//         $group: {
//             _id: {
//                 age: "$age", gender: "$gender"
//             }
//         }
//     }
// ])



// $group more , accumulator, $sort , $limit
// db.practice.aggregate([
//     {
//         $group: {
//             _id: "$age",
//             count: { $sum: 1 }

//         }
//     },

//     {
//         $project: {
//             _id: 0,
//             age: "$_id"
//             count: 1
//         }
//     },
//     {
//         $sort: {
//             _id: 1
//         }
//     },
//     {
//         $limit: 5
//     }
// ])


// Accumulator Operator using aggregation 
// db.practice.aggregate([
//     {
//         $group: {
//             _id: null,
//             count: { $sum: "$age" },
//             maxAge: { $max: "$age" },
//             minAge: { $min: "$age" },
//         }
//     },
//     {
//         $project: {
//             count: 1,
//             maxAge: 1,
//             minAge: 1,
//             ageRange: { $subtract: ["$maxAge", "$minAge"] }
//         }
//     }
// ])


// $unwind

/*db.practice.aggregate([
    {
       $unwind: "$education"
    },
    {
        $group: { _id: "$education"}
    }
])*/

// Multi Stage Pipeline 
// db.practice.aggregate([
//     {
//         $facet: {
//             firendsCount: [
//                 {
//                     $project: {
//                         friendCount: {
//                             $size: "$friends"
//                         }
//                     }
//                 }
//             ],
//             interestsCount: [
//                 {
//                     $project: {
//                         interestCount: { $size: "$interests" }
//                     }
//                 }
//             ],
//             skillsCount: [
//                 { 
//                     $project: {
//                         skillCount: { $size: "$skills" }
//                     }
//                 }
//             ]
//         }
//     }
// ])

//  $lookup operator
db.practice.aggregate([
    {
        $match: {email: 'dladley0@washingtonpost.com'}
    }
    {
        $lookup: {
               from: "info",
               localField: "email",
               foreignField: "userEmail",
               as: "extraInfo"
             }
    }
]) 










