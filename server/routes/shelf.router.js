const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const query = `
  SELECT * FROM item;
  `
  pool.query(query)
  .then((dbRes) => {
    res.send(dbRes.rows);
  })
  .catch((error) => {
    res.sendStatus(500);
    console.error(error);
  })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  const query = `
  SELECT "user".username, COUNT("item".user_id) from "user"
  JOIN "item" ON "item".user_id = "user".id
  GROUP BY "user".username;
  `

  pool.query(query)
  .then((dbRes) => {
    res.send(dbRes.rows);
  })
  .catch((err) => {
    res.sendStatus(500);
    console.error(err);
  })
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  const query = `
  SELECT * FROM item
  WHERE id = $1;
  `

  pool.query(query, [req.params.id])
  .then((dbRes) => {
    res.send(dbRes.rows);
  })
  .catch((error) => {
    res.sendStatus(500);
    console.error(error);
  })
});

module.exports = router;
