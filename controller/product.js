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
    const search = 'c'
    try {
      const responce =   await Product.find({name:{$regex:search,$options:'i'}})
      res.status(200).json({responce,length :responce.length})
    } catch (error) {
        console.log(error)
    }
}
exports.getone = async (req,res)=>{
    const {featured} = req.query
    const featureds = {}
if(featured){
    featureds.featured = featured === 'true'?true:false
}
console.log(featureds)
  const query = await Product.find(featureds)

  res.status(200).json(query)
}