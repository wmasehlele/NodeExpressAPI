const db = require("../config/Database")

class Category {

    constructor (description, model_name) {
        this.description = description
        this.model_name = model_name
    }

    async save () {
        let sql = `
        INSERT INTO categories (
            description,
            model_name
        ) VALUES (
            '${this.description}',
            '${this.model_name}'
        )
        `
        const [newCategory, _] = await db.execute(sql)

        return newCategory
    }

    static findAll() {

    }
}

module.exports = Category