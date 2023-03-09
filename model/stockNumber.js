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

 class StockNumberModel extends Model {}

 StockNumberModel.init({
    productID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    productNumber: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
 }, {
    sequelize,
    modelName: "StockNumber"
 });

//console.log(User === sequelize.models.User);
export default StockNumberModel