const {model,Schema} =require('../connection');
const mySchema=new Schema({
    product:String,
    type:String,
    price:String,
    color:String,
    
});

module.exports=model('product',mySchema);