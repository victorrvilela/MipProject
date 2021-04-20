const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const {email, password} = request.body;        
        try{
            const leader = await connection('leaders')
            .where('email', email)
            .where('password', password)
            .select('name')
            .first();            
            if(leader){
                return response.json(leader);
            }
            else{
                return response.status(400)
            .json({erro :'email ou senha incorretos'})
            }               
        }catch{
            return response.status(400)
            .json({erro :'email ou senha incorretos'})
        }
    }
}
