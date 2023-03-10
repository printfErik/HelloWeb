const {Sequelize, DataTypes, Model} = require("sequelize");

const sequelize = new Sequelize(
    'hxyjDevDB',
    'root',
    '927hxyjZB183!*#',
    {
        host: '47.104.242.213',
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
    tableName: 'ProductGroup',
    modelName: 'ProductGroup',
    timestamps: false
 });

await GroupModel.sync()

export default GroupModel;