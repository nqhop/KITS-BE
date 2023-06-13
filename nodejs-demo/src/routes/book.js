const express = require('express');
const router = express.Router();

const bookControllers = require('../controllers/book')

router.get('/get-all-books', bookControllers.getAllBooks);

router.get('/get-book-by-id/:id', bookControllers.getBookById)

router.get('/add-book', bookControllers.addBook)


module.exports = router;