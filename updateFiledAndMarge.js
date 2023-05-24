db.books.aggregate([
    {
        $match: {
            price: { $type: "string" },
            publicationYear: { $gt: 2020 },
        }
    },
    {
        $set: { 
            price: {
                $toInt: "$price"
            }
        }
    },
    {
        $merge: { into: 'books' },
    }
])