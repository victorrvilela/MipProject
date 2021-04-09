const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const [count] = await connection('employees').count();
        response.header('X-Total-Count', count['count(*)']);

        const employee = await connection('employees').select('*');
        return response.json(employee);
      },

    async create(request, response){
        const {name, cod, occupation, name_leader} = request.body;
        const name_adm = request.headers.authorization;
        try
            {const [id] = await connection('employees').insert({
                name,
                cod,
                occupation,
                name_leader,
                name_adm,
            });

            return response.json({id});
        }catch{
            return response.status(400).json({error: 'Falha ao cadastrar funcionário!'})
        }
    },

    async update(request, response){
        const {id} = request.params;
        const name = request.body.name2;
        const cod = request.body.cod2;
        const occupation = request.body.occupation2;
        const name_leader = request.body.name_leader2;
        const name_adm = request.headers.authorization;
        try{
            await connection('employees').where('id', id).update({
                name,
                cod,
                occupation,
                name_leader,
                name_adm,
            });
        return response.json({sucess: 'Funcionário atualizado com sucesso'});
        }catch{
            return response.status(400).json({error: 'Falha ao atualizar funcionário'})
      }
    },

    async delete(request, response){
        const {id} = request.params;
  
        await connection('employees').where('id', id).delete();
  
        return response.status(204).send();
    }
    
};