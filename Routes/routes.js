const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const bookController = require('../Controllers/bookController')
const requestController = require('../Controllers/requestController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multerConfiq = require('../Middleware/multerMiddleware')

// route for register
router.post('/register',userController.register)

// route for login
router.post('/login',userController.login)

// route for addBook
router.post('/add-book',jwtMiddleware,multerConfiq.single('bookImage'),bookController.addBook) 

// route for getAllBooks
router.get('/all-books',jwtMiddleware,bookController.getAllBooks)

// route for getUserBooks
router.get('/user-books',jwtMiddleware,bookController.getUserBooks)

// route for getBookDetails
router.get('/details/:bid',bookController.getBookDetails)

// route for createRequest
router.post('/create-request',jwtMiddleware,requestController.registerRequest)

// route for viewRecievedRequest
router.get('/view-recieved-requests',jwtMiddleware,requestController.viewRecievedRequest)

// route for viewSendRequest
router.get('/view-send-requests',jwtMiddleware,requestController.viewSendRequest)

// route for editBook
router.put('/book/edit/:bid',jwtMiddleware,multerConfiq.single("bookImage"),bookController.editBook)

// route for deleteBook
router.delete('/book/delete/:bid',jwtMiddleware,bookController.deleteBook)

// route for approveRequest
router.put('/approve-request',jwtMiddleware,requestController.approveRequest)

// router for deleteRequest
router.delete('/request/delete/:reqId',jwtMiddleware,requestController.deleteRequest)

module.exports = router