const express=require('express')
const router=express.Router()
const authorizations=require('../../middleware/tokenVerification')
const {Book}=require('../../models/User')


router.get('/',authorizations, async (req,res)=>{
  const books=await Book.find()
  res.status(200).send(books)
})

router.get('/:id',authorizations,async (req,res)=>{
  const book=await Book.findById(req.params.id)
  res.send(book)
})

router.post('/',authorizations,async (req,res)=>{
 try{
    const book=await new Book({
       title:req.body.title,
       author: req.body.author,
       description: req.body.description
    })
    book.save()
    res.send(book)
 }catch(error){
    return res.status(500).send(error)
 }
})



router.put('/:id',authorizations, async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating book' });
  }
});

router.delete('/:id',authorizations, async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (book) {
      res.json({message:'user deleted'});
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting book' });
  }
});

module.exports=router