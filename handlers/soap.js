
const soap = require("soap");


const tck = async (data) => {
    const url="https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL"

    return new Promise((res, rej) => {
        soap.createClient(url, (err, client) => {
            if (err) { rej(err); }
            client.TCKimlikNoDogrula(data, function(err, result) {
                if (err) { rej(err); }
                res(result);
            })
        });
       });
    
    

    // var res ="";
    //  soap.createClient(url, function(err, client) {
    //     client.TCKimlikNoDogrula(data, function(err, result) {
    //         //res.send({"response":result})
    //         return result;
    //     });
    // });

    
    
}





module.exports = {tck};