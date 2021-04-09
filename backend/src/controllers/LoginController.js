const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const {email, password} = request.body;
        try{
            const adm = await connection('adms')
            .where('email', email)
            .where('password', password)
            .select('name')
            .first();            
            return response.json(adm);
                
        }catch{
            return response.status(400)
            .json({erro :'email ou senha incorretos'})
        }
    }
}
