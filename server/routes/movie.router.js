const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    /* Gets all movies from the database
    and genres */
    const queryText = `SELECT movies.id as id, title, poster, description,
 name FROM movies JOIN genres ON movies.id = genres.id `;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});
/* req.body = new movie object */
router.put('/', (req, res) => {
    let movie = req.body;
    let id = req.body.id
    console.log(req.body);

    /* sends updated information to the database  */
    let queryText = `UPDATE "movies" SET "title" = $1,
     "description" = $2 WHERE id = $3;`;

    pool.query(queryText, [movie.movieNew.title, movie.movieNew.description, id])

        .then(result => {
            console.log('updated movie');
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(`Error adding new movie`, error);
            res.sendStatus(500);
        });

});

module.exports = router;