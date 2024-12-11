import { Sequelize } from "sequelize";

const sequelize = new Sequelize("testsequelize","root","12345",{
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log
});

sequelize.authenticate()//connection test
.then(()=>{
    console.log("Databse connected...");
}).catch(err=>{
    console.log("Error...");
});

sequelize.sync().then( ()=>{
    console.log('All models were synchronized successfully.');
})
.catch((err) => {
    console.log(err);
})

export default sequelize;