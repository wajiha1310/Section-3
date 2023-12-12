const {model,Schema} =require('../connection');
// schema is a variable
const mySchema=new Schema({
    like:integer,
    comment:String,
    share:integer,
  
});
// creating model and exporting
module.exports=model('post',mySchema);