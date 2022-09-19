const {dataSource} = require('/home/tectoro/Desktop/random--cc/database.js');
const {random} = require('/home/tectoro/Desktop/random--cc/entity/random.js');
const randomRepo = dataSource.getRepository("random");
const appConst = require('/home/tectoro/Desktop/random--cc/constants.js');



const add = async (req, res) =>{
  
    try{
        function getRandomInt(){
             const resp= Math.floor(Math.random());
             console.log.debug(resp);
             const number2 = randomRepo.save(resp);
             res.status(200).json({
                status:appConst.status.success,
                response:number2,
                message:null
            })

        }
        //const resp = await randomRepo.createQueryBuresp= await resp.getRandomInt(req.body);
    }
    catch(err){
        console.log(err.message);
        res.status(400).json({
            status: appConst.status.fail,
            response: null,
            message: err.message,
        })
    }
}

module.exports ={add}