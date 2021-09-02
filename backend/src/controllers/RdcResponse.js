const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const leader = request.headers.leader;
        try{
          const rdc = await connection('rdcs')
          .where('name_leader', leader)
          .select('*');                             
          if(rdc.length === 0){
            return response.status(400)
            .json(1)            
          }
          else{
            return response.json(rdc);
          }                       
        }catch{
          return response.status(400)
            .json({erro :'Erro na pesquisa'})
        }
    }
}