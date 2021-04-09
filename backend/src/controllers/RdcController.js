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
        const area = request.body.area2;
        const cod = request.body.cod2;
        const obra = request.body.obra2;
        const name_leader = request.body.name_leader2; 
        const area_activity1 = request.body.area_activity12;           
        const cod_activity1 = request.body.cod_activity12;
        const description_activity1 = request.body.description_activity12;
        const area_activity2 = request.body.area_activity22;           
        const cod_activity2 = request.body.cod_activity22;
        const description_activity2 = request.body.description_activity22;
        const area_activity3 = request.body.area_activity32;           
        const cod_activity3 = request.body.cod_activity32;
        const description_activity3 = request.body.description_activity32;
        const area_activity4 = request.body.area_activity42;           
        const cod_activity4 = request.body.cod_activity42;
        const description_activity4 = request.body.description_activity42;
        const area_activity5 = request.body.area_activity52;           
        const cod_activity5 = request.body.cod_activity52;
        const description_activity5 = request.body.description_activity52;
        const area_activity6 = request.body.area_activity62;           
        const cod_activity6 = request.body.cod_activity62;
        const description_activity6 = request.body.description_activity62;

        const name_adm = request.headers.authorization;
        try{
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
        }catch{
            return response.status(400).json({error: 'Erro ao atualizar RDC'})
        }
    },

    async delete(request, response){
        const {id} = request.params;
  
        await connection('rdcs').where('id', id).delete();
  
        return response.status(204).send();
    }
};