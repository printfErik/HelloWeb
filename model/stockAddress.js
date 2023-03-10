const {Sequelize, DataTypes, Model} = require("sequelize");

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
    modelName: "StockAddress",
    tableName: "StockAddress",
    timestamps: false
 });

await StockAddressModel.sync();

export default StockAddressModel