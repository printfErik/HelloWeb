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

 class GroupModel extends Model {}

 GroupModel.init({
    groupID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    groupType: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
 }, {
    sequelize,
    modelName: "ProductGroup"
 });

console.log(User === sequelize.models.User);