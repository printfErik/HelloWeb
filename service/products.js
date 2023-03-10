
import ProductModel from "../model/products.js";

export const getProductList = async () =>
{
    const productList = await ProductModel.findAll();
    //console.log("All products:", JSON.stringify(productList, null, 2));
    return productList;
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