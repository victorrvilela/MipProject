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
      const name = request.body.name2;
      const password = request.body.password2;
      const email = request.body.email2;
      const phone = request.body.phone2;       
      try{
        const teste = await connection('leaders').where('email', email).first();        
        if(teste.id ==id){             
          await connection('leaders').where('id',id).update({
            name,
            password,
            email,
            phone,
        });
          return response.json({sucess: 'Líder atualizado com sucesso'});        
        }
        else{
          return response.status(400).json({error: 'Este email já pertence a outro Líder!'})
        }
      }
      catch{      
        try{
          await connection('leaders').where('id',id).update({
            name,
            password,
            email,
            phone,
        });
          return response.json({sucess: 'Líder atualizado com sucesso'});        
        }catch{
          return response.status(400).json({error: 'Falha ao atualizar líder'})
        }
      }                          
    },

    async delete(request, response){
        const {id} = request.params;
  
        await connection('leaders').where('id', id).delete();
  
        return response.status(204).send();
    }
};