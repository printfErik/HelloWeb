import StockAddressModel from "../model/stockAddress.js";

export const getStockAddressList = async () =>
{
    const stockAddressList = await StockAddressModel.findAll();
    //console.log("All products:", JSON.stringify(productList, null, 2));
    return stockAddressList;
}