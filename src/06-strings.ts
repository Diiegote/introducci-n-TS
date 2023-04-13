(()=>{
  let productTitle = "My Amazing Product";
  productTitle = "My Amazing Change";
  console.log("productTitle",productTitle);

  const productDescription = "I'm a product description";
  console.log("productDescription",productDescription);

  let productPrice = 100;
  let isNew: boolean = true;

  const sumary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;
  console.log(sumary);
})();