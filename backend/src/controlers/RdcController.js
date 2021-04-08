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
            area_activity1,           
            cod_activity1,
            description_activity1,
            area_activity2,           
            cod_activity2,
            description_activity2,
            area_activity3,           
            cod_activity3,
            description_activity3,
            area_activity4,           
            cod_activity4,
            description_activity4,
            area_activity5,           
            cod_activity5,
            description_activity5,
            area_activity6,           
            cod_activity6,
            description_activity6,
            } = request.body;
        const name_adm = request.headers.authorization;

        const [id] = await connection('rdcs').insert({
            area,
            cod,
            obra,
            name_adm,
            name_leader,            
            area_activity1,           
            cod_activity1,
            description_activity1,
            area_activity2,           
            cod_activity2,
            description_activity2,
            area_activity3,           
            cod_activity3,
            description_activity3,
            area_activity4,           
            cod_activity4,
            description_activity4,
            area_activity5,           
            cod_activity5,
            description_activity5,
            area_activity6,           
            cod_activity6,
            description_activity6,
        });

        return response.json({id});
    },

    async update (request, response){
        const {id} = request.params;
        const { 
            area,
            cod,
            obra,
            name_leader, 
            area_activity1,           
            cod_activity1,
            description_activity1,
            area_activity2,           
            cod_activity2,
            description_activity2,
            area_activity3,           
            cod_activity3,
            description_activity3,
            area_activity4,           
            cod_activity4,
            description_activity4,
            area_activity5,           
            cod_activity5,
            description_activity5,
            area_activity6,           
            cod_activity6,
            description_activity6,
            } = request.body;
        const name_adm = request.headers.authorization;

        await connection('rdcs').update({
            area,
            cod,
            obra,
            name_adm,
            name_leader,            
            area_activity1,           
            cod_activity1,
            description_activity1,
            area_activity2,           
            cod_activity2,
            description_activity2,
            area_activity3,           
            cod_activity3,
            description_activity3,
            area_activity4,           
            cod_activity4,
            description_activity4,
            area_activity5,           
            cod_activity5,
            description_activity5,
            area_activity6,           
            cod_activity6,
            description_activity6,
        });

        return response.json({sucess: 'RDC atualizado com sucesso'});
    },

    async delete(request, response){
        const {id} = request.params;
  
        await connection('rdcs').where('id', id).delete();
  
        return response.status(204).send();
    }
};