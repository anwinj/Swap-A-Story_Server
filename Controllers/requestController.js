const requests = require('../Models/requestModel')

// logic for createRequest
exports.registerRequest = async (req,res)=>{
    const {bookName1,bookName2,bookAuthor1,bookAuthor2,bookImage1,bookImage2,userId1,userId2} = req.body

    try{
        const newRequest = new requests({
            bookName1,bookName2,bookAuthor1,bookAuthor2,bookImage1,bookImage2,userId1,userId2,approved:false
        })
        await newRequest.save()
        res.status(200).json(newRequest)
    }catch(err){
        res.status(401).json(err)
    }
}

// logic for viewRequest
exports.viewRequest = async (req,res)=>{
    const userId = req.payload
    try{
        const pendingRequests = await requests.find({userId1:userId})
        res.status(200).json(pendingRequests)
    }catch(err){
        res.status(401).json(err)
    }
}