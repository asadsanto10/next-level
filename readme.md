## Task 1:

```http
  API :: POST :: http://localhost:5005/api/v1/book/addBook
```

```js
body
  ::{
    title: "Book 1",
    author: ["Author 1", "Author 2"],
    genre: "Mystery",
    publicationYear: 2020,
    publisher: {
      name: "Publisher A",
      location: "City A",
    },
    reviews: [
      {
        user: "User 1",
        comment: "Great book!",
      },
      {
        user: "User 2",
        comment: "Interesting plot",
      },
    ],
    rating: 4.5,
    price: "90",
  };
```

#### Output

```javascript
{
  "status": "success",
  "message": "Book add successfully",
  "data": {
    "title": "Book 1",
    "author": [
      "Author 1",
      "Author 2"
    ],
    "genre": "Mystery",
    "publicationYear": 2020,
    "publisher": {
      "name": "Publisher A",
      "location": "City A"
    },
    "reviews": [
      {
        "user": "User 1",
        "comment": "Great book!"
      },
      {
        "user": "User 2",
        "comment": "Interesting plot"
      }
    ],
    "rating": 4.5,
    "price": "90"
  }
}
```

## Task 2:

```http
  API :: GET :: http://localhost:5005/api/v1/book/search?genre=Fantasy
```

#### Output

```javascript
{
  "status": "success",
  "message": "Book fetch successfully",
  "data": [
    {
      "publisher": {
        "name": "Publisher C",
        "location": "City C"
      },
      "_id": "646b8ee3e0052d4ea1ffad45",
      "title": "Book 3",
      "author": [
        "Author 4"
      ],
      "genre": "Fantasy",
      "publicationYear": 2022,
      "reviews": [
        {
          "_id": "646e28c32f243772debb44d5",
          "user": "User 5",
          "comment": "Captivating world-building"
        },
        {
          "_id": "646e28c32f243772debb44d6",
          "user": "User 6",
          "comment": "A must-read for fantasy lovers"
        }
      ],
      "rating": 4.2,
      "price": 80
    }
  ]
}
```

## Task 3:

```http
  API :: GET :: http://localhost:5005/api/v1/book/search?genre=Sci-Fi&publishedBy=Roli Books
```

#### Output

```javascript
{
  "status": "success",
  "message": "Book fetch successfully",
  "data": [
    {
      "publisher": {
        "name": "Roli Books",
        "location": "City B"
      },
      "_id": "646b8ee3e0052d4ea1ffad44",
      "title": "Book 2",
      "author": [
        "Author 3"
      ],
      "genre": "Sci-Fi",
      "publicationYear": 2018,
      "reviews": [
        {
          "_id": "646e289a2f243772debb44d2",
          "user": "User 3",
          "comment": "Mind-blowing"
        },
        {
          "_id": "646e289a2f243772debb44d3",
          "user": "User 4",
          "comment": "Couldn't put it down"
        }
      ],
      "rating": 4.8,
      "price": 120
    }
  ]
}
```

## Task 4:

```http
  API :: GET :: http://localhost:5005/api/v1/book/featured
```

#### Output

```javascript
  {
  "status": "success",
  "message": "Book fetch successfully",
  "data": [
    {
      "_id": "646b8ee3e0052d4ea1ffad43",
      "title": "Book 1",
      "author": [
        "Author 1",
        "Author 2"
      ],
      "genre": "Mystery",
      "publicationYear": 2020,
      "publisher": {
        "name": "Publisher A",
        "location": "City A"
      },
      "reviews": [
        {
          "user": "User 1",
          "comment": "Great book!"
        },
        {
          "user": "User 2",
          "comment": "Interesting plot"
        }
      ],
      "rating": 4.5,
      "price": "90",
      "featured": "Popular"
    },
    {
      "_id": "646b8ee3e0052d4ea1ffad44",
      "title": "Book 2",
      "author": [
        "Author 3"
      ],
      "genre": "Sci-Fi",
      "publicationYear": 2018,
      "publisher": {
        "name": "Roli Books",
        "location": "City B"
      },
      "reviews": [
        {
          "user": "User 3",
          "comment": "Mind-blowing"
        },
        {
          "user": "User 4",
          "comment": "Couldn't put it down"
        }
      ],
      "rating": 4.8,
      "price": "120",
      "featured": "Best Seller"
    },
    {
      "_id": "646b8ee3e0052d4ea1ffad45",
      "title": "Book 3",
      "author": [
        "Author 4"
      ],
      "genre": "Fantasy",
      "publicationYear": 2022,
      "publisher": {
        "name": "Publisher C",
        "location": "City C"
      },
      "reviews": [
        {
          "user": "User 5",
          "comment": "Captivating world-building"
        },
        {
          "user": "User 6",
          "comment": "A must-read for fantasy lovers"
        }
      ],
      "rating": 4.2,
      "price": 80,
      "featured": "Popular"
    },
    {
      "_id": "646b8ee3e0052d4ea1ffad46",
      "title": "Book 4",
      "author": [
        "Author 5",
        "Author 6"
      ],
      "genre": "Thriller",
      "publicationYear": 2017,
      "publisher": {
        "name": "Publisher D",
        "location": "City D"
      },
      "reviews": [
        {
          "user": "User 7",
          "comment": "Kept me on the edge of my seat"
        },
        {
          "user": "User 8",
          "comment": "Twists and turns at every chapter"
        }
      ],
      "rating": 4.6,
      "price": "95",
      "featured": "Best Seller"
    },
    {
      "_id": "646b8ee3e0052d4ea1ffad48",
      "title": "Book 6",
      "author": [
        "Author 8"
      ],
      "genre": "Romance",
      "publicationYear": 2019,
      "publisher": {
        "name": "Publisher F",
        "location": "City F"
      },
      "reviews": [
        {
          "user": "User 11",
          "comment": "Heartwarming love story"
        },
        {
          "user": "User 12",
          "comment": "Couldn't put it down"
        }
      ],
      "rating": 4.1,
      "price": "85",
      "featured": "Popular"
    },
    {
      "_id": "646b8ee3e0052d4ea1ffad49",
      "title": "Book 7",
      "author": [
        "Author 9",
        "Author 10"
      ],
      "genre": "Biography",
      "publicationYear": 2023,
      "publisher": {
        "name": "Publisher G",
        "location": "City G"
      },
      "reviews": [
        {
          "user": "User 13",
          "comment": "Inspiring life journey"
        },
        {
          "user": "User 14",
          "comment": "Well-researched and engaging"
        }
      ],
      "rating": 4.7,
      "price": 105,
      "featured": "Best Seller"
    },
    {
      "_id": "646b8ee3e0052d4ea1ffad4a",
      "title": "Book 8",
      "author": [
        "Author 11"
      ],
      "genre": "Horror",
      "publicationYear": 2022,
      "publisher": {
        "name": "Publisher H",
        "location": "City H"
      },
      "reviews": [
        {
          "user": "User 15",
          "comment": "Chilling and suspenseful"
        },
        {
          "user": "User 16",
          "comment": "Kept me up at night"
        }
      ],
      "rating": 4.4,
      "price": 95,
      "featured": "Popular"
    },
    {
      "_id": "646b8ee3e0052d4ea1ffad4b",
      "title": "Book 9",
      "author": [
        "Author 12",
        "Author 13"
      ],
      "genre": "Science",
      "publicationYear": 2020,
      "publisher": {
        "name": "Publisher I",
        "location": "City I"
      },
      "reviews": [
        {
          "user": "User 17",
          "comment": "Fascinating exploration of scientific concepts"
        },
        {
          "user": "User 18",
          "comment": "Accessible and informative"
        }
      ],
      "rating": 4.9,
      "price": "115",
      "featured": "Best Seller"
    },
    {
      "_id": "646cc8d5a17ead75005aa15b",
      "title": "Book 1",
      "author": [
        "Author 1",
        "Author 2"
      ],
      "genre": "Mystery",
      "publicationYear": 2020,
      "rating": 4.5,
      "price": 90,
      "publisher": {
        "name": "Publisher A",
        "location": "City A"
      },
      "reviews": [
        {
          "user": "User 1",
          "comment": "Great book!",
          "_id": "646cc8d5a17ead75005aa15c"
        },
        {
          "user": "User 2",
          "comment": "Interesting plot",
          "_id": "646cc8d5a17ead75005aa15d"
        }
      ],
      "featured": "Popular"
    },
    {
      "_id": "646cc8d9a17ead75005aa15f",
      "title": "Book 1",
      "author": [
        "Author 1",
        "Author 2"
      ],
      "genre": "Mystery",
      "publicationYear": 2020,
      "rating": 4.5,
      "price": 90,
      "publisher": {
        "name": "Publisher A",
        "location": "City A"
      },
      "reviews": [
        {
          "user": "User 1",
          "comment": "Great book!",
          "_id": "646cc8d9a17ead75005aa160"
        },
        {
          "user": "User 2",
          "comment": "Interesting plot",
          "_id": "646cc8d9a17ead75005aa161"
        }
      ],
      "featured": "Popular"
    },
    {
      "_id": "646cca3eaf0b454668a0513c",
      "title": "Book 1",
      "author": [
        "Author 1",
        "Author 2"
      ],
      "genre": "Mystery",
      "publicationYear": 2020,
      "rating": 4.5,
      "price": 90,
      "publisher": {
        "name": "Publisher A",
        "location": "City A"
      },
      "reviews": [
        {
          "user": "User 1",
          "comment": "Great book!",
          "_id": "646cca3eaf0b454668a0513d"
        },
        {
          "user": "User 2",
          "comment": "Interesting plot",
          "_id": "646cca3eaf0b454668a0513e"
        }
      ],
      "featured": "Popular"
    },
    {
      "_id": "646cd80822fd0c978df3e5b7",
      "title": "Book 1",
      "author": [
        "Author 1",
        "Author 2"
      ],
      "genre": "Mystery",
      "publicationYear": 2020,
      "rating": 4.5,
      "price": 90,
      "publisher": {
        "name": "Publisher A",
        "location": "City A"
      },
      "reviews": [
        {
          "user": "User 1",
          "comment": "Great book!",
          "_id": "646cd80822fd0c978df3e5b8"
        },
        {
          "user": "User 2",
          "comment": "Interesting plot",
          "_id": "646cd80822fd0c978df3e5b9"
        }
      ],
      "featured": "Popular"
    }
  ]
}
```

## Task 5:

```http
  API :: PUT :: http://localhost:5005/api/v1/book/update-price
```

#### Output

```javascript
{
  "status": "success",
  "message": "Book price update successfully"
}
```

---

# Questions Answer:

### Question 1:

To enforce a uniform structure and data validation for the documents within a collection, one may create a model in MongoDB with an interface and schema. Also, It helps define the structure by allowing to specify field names, data types, constraints, and relationships. This ensures that the documents stored in the collection adhere to the defined schema, promoting data consistency and reliability.

### Question 2:

Field filtering in MongoDB is the process of deciding which fields to include and which to exclude in the documents that are returned as a result of a query. You may manage the data that is retrieved, which lowers the volume of data sent over the network and enhances query performance.

There are two ways to specify which fields will be included and which fields will be excluded in the return document. If want to include then 1 and if want to exclude then have to give 0.

#### Example

```javascript
db.books.find({ _id: ObjectId("646b8ee3e0052d4ea1ffad4a") }, { _id: 0 });
db.books
  .find({ _id: ObjectId("646b8ee3e0052d4ea1ffad4a") })
  .project({ publisher: 1 });
```

### Question 3:

Instance methods are methods that perform some action on a specific instance of a Model rather than the entire Model itself. These methods are specific to a particular document and can be invoked on instances of the model.

#### Example

```javascript
bookSchema.methods.getBookInfo = function () {
  return {
    bookName: this.bookbane,
    author: this.author,
  };
};
```

### Question 4:

MongoDB comparison operators such as "$ne" (not equal), "$gt" (greater than), "$lt" (less than), "$gte" (greater than or equal to), and "$lte" (less than or equal to) are used to perform comparisons in query conditions.

#### Example

```javascript
"$ne"::db.books.find({ price: { $ne: 90 } });
"$gt"::db.books.find({ price: { $gt: 80 } });
"$lt"::db.books.find({ price: { $lt: 60 } });
"$gte"::db.books.find({ price: { $gte: 50 } });
"$lte"::db.books.find({ price: { $lte: 30 } });
```

### Question 5:

MongoDB comparison operators include the $in (pronounce it "in") and $nin (Not IN) operators. These operators particularly target array values exclusively, and they have the ability to filter the collection according to whether values exist or not. In contrast to the $nin operator, which helps to display only documents that do not include the values provided to it, the $in operator searches for array values and only shows documents that match the array.

#### Example

```javascript
"$in"::db.books.find({ author: { $in: ["Author 9", "Author 10"] } });
"$nin"::db.books.find({ author: { $nin: ["Author 9", "Author 10"] } });
```
