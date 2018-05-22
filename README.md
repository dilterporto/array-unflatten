```javascript
const array = require('array-unflatten');

//  some array structure like below
const origin = [
  {
    'card': 1,
    'dates[0].date': new Date(),
    'dates[0].quantity': 3,
    'dates[1].date': new Date(),
    'dates[1].quantity': 4,
    'dates[2].date': new Date(),
    'dates[2].quantity': 4,
  },
  {
    card: 2,
    'dates[0].date': new Date(),
    'dates[0].quantity': 4,
  },
];

//  applying unflatten
const result = array.unflatten(origin);

//  results
console.log(result);

/*
  result:
  [
    {
      "card": 1,
      "dates": [
        { 
          "quantity": 3, 
          "date": "2018-05-22T17:01:52.213Z" 
        },
        { 
          "quantity": 4, 
          "date": "2018-05-22T17:01:52.213Z" 
        },
        { 
          "quantity": 4, 
          "date": "2018-05-22T17:01:52.213Z" 
        },
      ]
    },
    { 
      "card": 2, 
      "dates": [ 
        { 
          "quantity": 4, 
          "date": "2018-05-22T17:01:52.213Z" 
        } 
      ] 
    }
  ]
*/
```