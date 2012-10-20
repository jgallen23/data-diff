#Data Diff

A library that calculates the changes from one json object to another.  It was designed for figuring out the differences in data returned from the server so only the models that change would trigger updates to the views.  It will work in both the browser and in node.

##Example
First response from server:
```javascript
[
  {
    "id": 1,
    "name": "James Brown",
    "status": 1,
    "counts": {
      "fingers": 5,
      "toes": 5
    }
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "status": 1,
    "counts": {
      "fingers": 5,
      "toes": 5
    }
  }
]
```
Second response from server:
```javascript
[
  {
    "id": 1,
    "name": "James Brown",
    "status": 1,
    "counts": {
      "fingers": 5,
      "toes": 5
    }
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "status": 2,
    "counts": {
      "fingers": 5,
      "toes": 10 
    }
  },
  {
    "id": 3,
    "name": "John Smith",
    "status": 2,
    "counts": {
      "fingers": 5,
      "toes": 5
    }
  }
]
```
After running through dataDiff
```javascript
[
  {
    "id": 2,
    "status": 2,
    "counts": {
      "toes": 10 
    }
  },
  {
    "id": 3,
    "name": "John Smith",
    "status": 2,
    "counts": {
      "fingers": 5,
      "toes": 5
    }
  }
]
```

Only the new items and the differences get returned.

##Usage

```javascript
var diff = dataDiff(data1, data2, 'id'); //id is the key to match the two data points together
```

##Installation

Node:
```npm install data-diff```

Browser: [Development](https://raw.github.com/jgallen23/data-diff/master/dist/data-diff.js)

