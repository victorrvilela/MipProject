const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const leader = request.headers.leader;
        const employee = await connection('employees')
        .where('name_leader', leader)
        .select('*');
        return response.json(employee);
      },
}