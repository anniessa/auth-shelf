const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

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
router.post('/',rejectUnauthenticated ,(req, res) => {
  console.log('shelf POST route')
  console.log(req.user)

  const sqlQuery = `INSERT INTO item (description, image_url, user_id)
  VALUES ($1, $2, $3)`
  // endpoint functionality
const sqlParams = [
req.body.description,
req.body.image_url,
req.body.user_id
]
pool.query(sqlQuery,sqlParams)
.then (dbRes => {
  res.sendStatus(200)
}).catch (error => {
  console.log('error in post',error)
  res.sendStatus(500)
})
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `DELETE * FROM "item" WHERE 
  id = $1`
	pool.query(sqlQuery, [req.params.id])
		.then(() => { res.sendStatus(200); })
		.catch((err) => {
			console.error('Error completing DELETE item query', err);
			res.sendStatus(500);
		});
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
