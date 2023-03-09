
import { productModel } from "../model/products.js";

export const getProductList = async () =>
{
    const productList = await productModel.findAll();
    console.log("All products:", JSON.stringify(productList, null, 2));
}

export const getProductListByGroup = async (id) =>
{
    const productList = await productModel.findAll({
        where: {
            groupID : id
        }
    });
    console.log("All products:", JSON.stringify(productList, null, 2));
}