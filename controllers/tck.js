
//const {getPosts,getPost} = require('../models/mymodel');
const xml = require('xml')
const {tck} = require('../handlers/soap');
const soap = require("soap");


const checkTck = async (req,res,next) =>{

    
    var data = req.body;
    const url="https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL"
   

    // soap.createClient(url, function(err, client) {
    //     client.TCKimlikNoDogrula(data.data, function(err, result) {
    //         res.send({"response":result})
    //     });
    // });

    tck(data)
    .then((result,err) =>{
        if (err) { res.send({"status":"false","response":err});}
        res.send({"status":"success","response":result}) 
    })
   
}





module.exports = {checkTck}