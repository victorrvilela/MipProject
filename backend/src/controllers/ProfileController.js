const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const leader = request.headers.leader;
        try{
          const employee = await connection('employees')
          .where('name_leader', leader)
          .select('*');
          return response.json(employee);
        }catch{
          return response.status(400)
            .json({erro :'Erro na pesquisa'})
        }
    }
}