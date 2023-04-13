import {addProduct,calcStock,products} from "./product.service";

addProduct({title:"Product1",stock:15,createdAt:new Date(1993,5,5),size:"M"});
addProduct({title:"Product2",stock:16,createdAt:new Date(1993,6,5),size:"L"});
addProduct({title:"Product3",stock:17,createdAt:new Date(1993,7,5),size:"S"});
addProduct({title:"Product4",stock:18,createdAt:new Date(1993,8,5),size:"XL"});
console.log(products);
const total = calcStock();
console.log(total);

