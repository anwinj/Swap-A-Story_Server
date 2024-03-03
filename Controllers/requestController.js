const requests = require('../Models/requestModel')

// logic for createRequest
exports.registerRequest = async (req,res)=>{
    const {bookName1,bookName2,bookAuthor1,bookAuthor2,bookImage1,bookImage2,userId1,userId2,bookId1,bookId2} = req.body

    try{
        const newRequest = new requests({
            bookName1,bookName2,bookAuthor1,bookAuthor2,bookImage1,bookImage2,userId1,userId2,bookId1,bookId2,approved:false
        })
        await newRequest.save()
        res.status(200).json(newRequest)
    }catch(err){
        res.status(401).json(err)
    }
}

// logic for viewRecievedRequest
exports.viewRecievedRequest = async (req,res)=>{
    const userId = req.payload
    try{
        const pendingRequests = await requests.find({userId1:userId},{approved:false})
        res.status(200).json(pendingRequests)
    }catch(err){
        res.status(401).json(err)
    }
}

// logic for viewSendRequest
exports.viewSendRequest = async (req,res)=>{
    const userId = req.payload
    try{
        const sendRequest = await requests.find({userId2:userId})
        res.status(200).json(sendRequest)
    }catch(err){
        res.status(401).json(err)
    }
}