
const port = 5000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())

const Products = [
  {
      "name": "orange Juice",
      "category": "Drinks",
      "price": 14.99
  },
  {
      "name": "Apples",
      "category": "fruits",
      "price": 4.99
  },
  {
      "name": "Tomatos",
      "category": "vegetables",
      "price": 6.39
  },
  {
      "name": "Coffee",
      "category": "Drinks",
      "price": 3.15
  },
  {
      "name": "Sweet Paper",
      "category": "Vegetables",
      "price": 12.15
  },
  {
      "name": "Grapes",
      "category": "FRUITS",
      "price": 20.49
  },
  {
      "name": "Pears",
      "category": "Fruits",
      "price": 1.35
  },
  {
      "name": "Team",
      "category": "Drinks",
      "price": 0.4
  }
]

app.get('/', (req, res) => {
  return res.send(Products);
});
 
app.post('/', (req, res) => {
  return res.send('data recived');
});


app.listen(port, () => console.log(`Listening on port ${port}`));