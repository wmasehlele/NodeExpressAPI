const mssql = require("mssql")
const database = require("../config/Database")

class Category {

    constructor (description, model_name) {
        this.description = description
        this.model_name = model_name
    }

    async save () {
        const dbpool = await mssql.connect(database)
        const result = await dbpool.request()
        .input("description", mssql.NVarChar , this.description)
        .input("model_name", mssql.NVarChar , this.model_name)
        .execute("sp_categories")      

        if (result.recordset) {
            return result.recordset
        } else {
            return 'done'
        }
    }

    static findAll() { 

    }
}

module.exports = Category