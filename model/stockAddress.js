const {Sequelize, DataTypes, MOdel} = require("sequelize");

const sequelize = new Sequelize(
    'hxyjDevDB',
    'root',
    'sql927hxzjZB183!*#',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);
 
 sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 class StockAddressModel extends Model {}

 StockAddressModel.init({
    stockAddressID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    stockAddress: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
 }, {
    sequelize,
    modelName: "StockAddress"
 });

console.log(User === sequelize.models.User);