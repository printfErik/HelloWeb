import GroupModel from "../model/groups.js";

export const getGroupList = async () =>
{
    const groupList = await GroupModel.findAll();
    //console.log("All products:", JSON.stringify(productList, null, 2));
    return groupList;
}
