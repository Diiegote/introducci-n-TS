(()=>{
  // usamos la funcion anonima autoejecutada para que no choquen las variables que tengan el mismo nombre en otros archivos. Cundo trabajemos con modulos esto no es necesario.
  let myProductName = 'Product 1';
  let myProductPrice = 123;
  myProductName = 'Change';
  myProductName.toLocaleLowerCase();

  myProductPrice.toFixed();

  const myProductStock = 1000;
  const myProductName2 = 'Product 2';
})();