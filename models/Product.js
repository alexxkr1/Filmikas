const database = require("../database")

class Product{
    constructor(name, type_id, producer_id, prod_type_id){
        this.name = name;
        this.producer_id = producer_id;
        this.prod_type_id = prod_type_id;
        this.type_id = type_id;
    }

    async save(){
        let name = "Alex";
        let producer_id = "999";
        let prod_type_id = "999";
        let type_id = "999";

        let sql = `
        INSERT INTO product(
            name, 
            type_id, 
            producer_id, 
            prod_type_id
        )
        VALUES(
            '${this.name}',
            '${this.producer_id}',
            '${this.prod_type_id}',
            '${this.type_id}',
        )
        `

        const [newProduct, _] = await database.execute(sql);

        return newProduct;
    }
    static findAll(){

    }
}

module.exports = Product;

// https://www.youtube.com/watch?v=344Zv2m9TYI