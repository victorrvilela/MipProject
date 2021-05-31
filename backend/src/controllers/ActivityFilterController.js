const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const {area} = request.body;
        console.log(area);
        try{
          const activity = await connection('activities').where('area', area).select('*');
          console.log(activity);
          return response.json(activity);
          
        }catch{
          return response.status(400)
            .json({erro :'Erro na pesquisa'})
        }
    }
}