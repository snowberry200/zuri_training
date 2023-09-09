const info = require("../data");

//request to get slack_name from Json
const getAllInfo = (req,res)=>{
  const {slack_name,track} = req.query
 
  if(slack_name,track){
    return res.status(200).json({slack_name,track})
  }
  else{res.status(400).json({success:false,msg:'not found'})}

 res.status(200).json({success: true ,data: slack_name,track})

}

module.exports = { getAllInfo };
