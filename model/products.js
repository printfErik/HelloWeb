import {Sequelize, DataTypes, Model} from 'sequelize';

const sequelize = new Sequelize(
    'hxyjDevDB',
    'root',
    '927hxzjZB183!*#',
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

 class ProductModel extends Model {}

 ProductModel.init({
    productID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    productName: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: false
    },
    groupID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    stockAddressID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    productStatus: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    productPriority: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    productImage: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    productDescription: {
        type: DataTypes.STRING(1000),
        allowNull: true
    }
 }, {
    sequelize,
    modelName: "products"
 });

//console.log(User === sequelize.models.User);

export const productModel = new ProductModel()
