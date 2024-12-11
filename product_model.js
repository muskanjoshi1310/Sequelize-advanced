import { DataTypes } from "sequelize";
import sequelize from "../DB/db_config.js";
import Category from "./category_model.js";

const Product = sequelize.define("product", {

    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    price : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },
    catgory_id : {
        type : DataTypes.INTEGER,
        // allowNull : false,
        references : {
            model : Category,
            key : 'id'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
    }
})

Category.hasMany(Product,{foreignKey : 'category_id'});

export default Product;