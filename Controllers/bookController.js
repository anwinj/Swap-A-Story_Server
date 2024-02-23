const books = require('../Models/bookModel')

// addbook
exports.addBook = async (req,res) =>{
    console.log("Inside Add Book Api");
    const {title,author,genre,description} = req.body
    const bookImage = req.file.filename
    const userId = req.payload
    try{
        const newBook = new books({
            title,author,genre,description,bookImage,userId
        })
        await newBook.save()
        res.status(200).json(newBook)
    }catch(err){
        res.status(401).json(err)
    }

}

// getAllBooks
exports.getAllBooks = async(req,res)=>{
    const userId = req.payload
    try{
        const allBooks = await books.find({userId:{$nin:[userId]}})
        res.status(200).json(allBooks)
    }catch(err){
        res.status(401).json(err)
    }
}

// getUserBooks
exports.getUserBooks = async(req,res)=>{
    const userId = req.payload
    try{
        const userBooks = await books.find({userId})
        res.status(200).json(userBooks)
    }catch(err){
        res.status(401).json(err)
    }
}

// getBookDetails
exports.getBookDetails = async(req,res)=>{
    const {bid} = req.params
    // console.log(bid);
    try{
        const book = await books.find({_id:bid})
        res.status(200).json(book)
    }catch(err){
        res.status(401).json(err)
    }
}

// edit book
exports.editBook = async(req,res)=>{
    const {title,author,genre,description,bookImage} = req.body
    const uploadImage = req.file?req.file.filename:bookImage
    const {bid} = req.params
    const userId = req.payload
    try{
        const updateBook = await books.findByIdAndUpdate({_id:bid},{title,author,genre,description,uploadImage,userId},{new:true})
        await updateBook.save()
        res.status(200).json(updateBook)
    }catch(err){
        res.status(401).json(err)
    }
}

// delete book
exports.deleteBook = async(req,res)=>{
    const {bid} = req.params
    try{
        const deleteData = await books.findByIdAndDelete({_id:bid})
        res.status(200).json(deleteData)
    }catch(err){
        res.status(401).json(err)
    }
}