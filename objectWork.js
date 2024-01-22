var product={
    code:"sku10",
    title:"Oreo",
    category:"Food",
    avalqty:50,
}

console.log(product.title);

// found or not found

console.log("price" in product?"found":"Not found");

// add new item

product["price"]=500;
console.log(product);