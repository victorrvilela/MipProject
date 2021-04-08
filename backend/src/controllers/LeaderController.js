const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const [count] = await connection('leaders').count();
        response.header('X-Total-Count', count['count(*)']);

        const leaders = await connection('leaders').select('*');
        return response.json(leaders);
      },

    async create (request, response){
        const {name, password, email, phone} = request.body;
        const name_adm = request.headers.authorization;

        const teste = await connection('leaders')
        .where('email', email)
        .first()

        if(!teste){
            const [id] = await connection('leaders').insert({
                name,
                password,
                email,
                phone,
                name_adm,
            });

            return response.json({id});
        }
        else{
            return response.status(400).json({error: 'Email já cadastrado'})
          }
    },

    async update (request, response){
        const {id} = request.params;
        const {name, password, email, phone} = request.body;
  
        if(name!=''&&password!=''&&phone!=''){
          await connection('leaders').where('id', id).update({
            name,
            password,
            phone,
          });
  
          return response.json({sucess: 'Líder atualizado com sucesso'});
        }
        else{
          return response.status(400).json({error: 'Falha ao atualizar'})
        }        
      },

    async delete(request, response){
        const {id} = request.params;
  
        await connection('leaders').where('id', id).delete();
  
        return response.status(204).send();
    }
};