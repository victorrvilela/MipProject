const connection = require('../database/connection');


module.exports = {
    async index (request,response) {
          const adms = await connection('adms').select('*');
        return response.json(adms);
      },

    async create (request, response){
        const {name, password, email, phone} = request.body;

        const teste = await connection('adms')
        .where('email', email)
        .first()

        if(!teste&&name!=''&&password!=''&&email!=''&&phone!=''){
          const [id] = await connection('adms').insert({
            name,
            password,
            email,
            phone,
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
        const teste = await connection('adms').where('email', email).first();        
        if(teste.id ==id){             
          await connection('adms').where('id',id).update({
            name,
            password,
            email,
            phone,
        });
          return response.json({sucess: 'Administrador atualizado com sucesso'});        
        }
        else{
          return response.status(400).json({error: 'Este email já pertence a outro administrador!'})
        }
      }
      catch{      
        try{
          await connection('adms').where('id',id).update({
            name,
            password,
            email,
            phone,
        });
          return response.json({sucess: 'Administrador atualizado com sucesso'});        
        }catch{
          return response.status(400).json({error: 'Falha ao atualizar '})
        }
      }                          
    },
      

  

    async delete(request, response){
      const {id} = request.params;

      await connection('adms').where('id', id).delete();

      return response.status(204).send();
  },

};