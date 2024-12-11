import { DataTypes } from "sequelize";
import sequelize from "../DB/db_config.js";

const Category = sequelize.define("categories",{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    category_name :{
        type : DataTypes.STRING,
        allowNull : false
    },
    category_description : {
        type : DataTypes.STRING,
        allowNull : false
    }
});


export default Category;