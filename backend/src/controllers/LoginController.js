const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const {email, password} = request.body;

        const adm = await connection('adms')
        .where('email', email)
        .where('password', password)
        .select('name')
        .first();

        if(adm){
            return response.json(adm);
        }

        const leader = await connection('leaders')
        .where('email', email)
        .where('password', password)
        .select('name')
        .first();

        if(leader){
            return response.json(leader);
        }
        return response.status(400)
        .json({erro :'email ou senha incorretos'})
    }
}
