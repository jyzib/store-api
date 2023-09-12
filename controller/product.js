const Product = require("../models/product")
const product = require("../product")
console.log()

exports.postproduct =async (req,res)=>{
const data = req.body

    try {
        const Produc = await Product.create(data)
        res.status(200).json(Produc)
    } catch (error) {
        
    }

}

exports.getallproduct = async (req,res)=>{
    try {
      const responce =   await Product.find()
      res.status(200).json({responce,length :responce.length})
    } catch (error) {
        console.log(error)
    }
   
}
exports.getone = async (req,res)=>{
    console.log(req.query)
  const query = await Product.find({company:'ikea'})
console.log(query)
  res.status(200).json(query)
}