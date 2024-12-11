import { DataTypes } from "sequelize";
import sequelize from "../DB/db_config.js";

const Admin = sequelize.define("admin",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contact:{
        type: DataTypes.BIGINT
    }
});
// sequelize.sync()
// .then(()=>{
//     console.log("User table created..");
// }).catch(err=>{
//     console.log(err);
// });

export default Admin;


/*
  Sequelize model turn into model class and it also provide
  interface to interact with the database
  create()
  find()
  findOne()
  destroy()
  update() 
*/









