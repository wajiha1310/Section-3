const {model,Schema} =require('../connection');
// schema is a variable
const mySchema=new Schema({
    like:string,
    comment:String,
    share:string,
  
});
// creating model and exporting
module.exports=model('post',mySchema);