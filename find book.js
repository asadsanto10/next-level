db.books.aggregate([
    { $match: { rating: { $gte: 4 } } },
    {
        $addFields: {
            featured: {
                $switch: {
                    branches: [
                        {
                            case: {
                                $and: [
                                    { $gte: ["$rating", 4] },
                                    { $lte: ["$rating", 4.4] }
                                ]

                            }, then: "Popular"
                        },
                        {
                            case: {
                                $gte: ["$rating", 4.5]
                            },
                            then: "Best Seller"
                        }
                    ],
                    default: "low rating"
                }
            }
        }
    },
    { $project: { _id: 0 } }
])