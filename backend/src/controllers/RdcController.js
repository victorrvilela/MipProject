const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const [count] = await connection('rdcs').count();
        response.header('X-Total-Count', count['count(*)']);
        const rdc = await connection('rdcs').select('*');
        return response.json(rdc);        
      },

    async create (request, response){
        const { 
            area,
            cod,
            obra,
            name_leader, 
            
            } = request.body;
        const name_adm = request.headers.authorization;


        const rdcUnico = await connection('rdcs').where('name_leader', name_leader).first()
        
        if(!rdcUnico){
            const [id] = await connection('rdcs').insert({
                area,
                cod,
                obra,
                name_adm,
                name_leader,            
            
            });

            return response.json({id});
        }else{
            return response.status(400).json({error: 'Líder já possui RDC cadastrado!'})
        }
    },

    async update (request, response){
        const {id} = request.params;
        const area = request.body.area2;
        const cod = request.body.cod2;
        const obra = request.body.obra2;
        const name_leader = request.body.name_leader2; 
        

        const name_adm = request.headers.authorization;
        
        const rdcUnico = await connection('rdcs').where('id', id).first()
       
        
        if(rdcUnico.name_leader === name_leader){            
            try{
                await connection('rdcs').where('id', id).update({
                    area,
                    cod,
                    obra,
                    name_adm,
                    name_leader,                           
                });

                return response.json({sucess: 'RDC atualizado com sucesso'});
            }catch{
                return response.status(400).json({error: 'Erro ao atualizar RDC'})
            }
        } else{           
            return response.status(400).json({error: 'Erro'})
        }      
    },

    async delete(request, response){
        const {id} = request.params;
  
        await connection('rdcs').where('id', id).delete();
  
        return response.status(204).send();
    }
};