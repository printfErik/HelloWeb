import StockNumberModel from "../model/stockNumber.js";

export const getStockNumberList = async () =>
{
    const stockNumberList = await StockNumberModel.findAll();
    //console.log("All products:", JSON.stringify(productList, null, 2));
    return stockNumberList;
}