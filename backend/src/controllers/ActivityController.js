const connection = require('../database/connection');

module.exports = {
    async index(request,response) {
        const [count] = await connection('activities').count();
        response.header('X-Total-Count', count['count(*)']);

        const activity = await connection('activities').select('*');
        return response.json(activity);
      },

    async create(request, response){
        const area= request.body.area;
        const cod = request.body.cod;
        const description = request.body.description;
       try{
        const [id] = await connection('activities').insert({
            area,
            cod,
            description,
        });

        return response.json({ id });
    }catch{
        return response.status(400).json({error: 'Erro ao atualizar atividade'})
    }   
    },

    async update (request, response){
        const {id} = request.params;
        const area = request.body.area2;
        const cod  = request.body.cod2;
        const description = request.body.description2;

        try{           
        await connection('activities').where('id', id).update({
            area,
            cod,
            description,
        });
            return response.json({sucess: 'Atividade atualizada com sucesso'});        
        }catch{
            return response.status(400).json({error: 'Falha ao atualizar '})
        }                         
    },
    
    async delete(request, response){
        const {id} = request.params;

        await connection('activities').where('id', id).delete({

        });

        return response.status(204).send();
    }
};

       

    
   
    

   