const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
      const {leader} = request.body;
      console.log(leader)
        try{
          const activity = await connection('leaders').where('name', leader).select('*');
          return response.json(activity);
        }catch{
          return response.status(400)
            .json({erro :'Erro na pesquisa'})
        }
    }
}