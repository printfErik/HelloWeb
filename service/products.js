import { WhereOptions } from "sequelize";
import { ProductModel } from "../model/products";

export const getProductList = async () =>
{
    const productList = await ProductModel.findAll();
    console.log("All products:", JSON.stringify(productList, null, 2));
}

export const getProductListByGroup = async (id) =>
{
    const productList = await ProductModel.findAll({
        where: {
            groupID : id
        }
    });
    console.log("All products:", JSON.stringify(productList, null, 2));
}