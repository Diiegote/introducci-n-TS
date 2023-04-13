(()=>{
  // de esta manera ts detecta que el array solo contiene numeros y no nos deja agregar elementos que no sean numericos.
  let price = [1,2,3,4,5,6,7,8,9,10];
  // price.push("10");
  // price.push(true);
  // price.push({});
  price.push(18);

  // de esta manera si ya inicializamos el array con numeros,strings y booleans si podemos agregar cualquier tipo de dato que esten relacionados.
  let product = [1,2,3,4,5,6,7,8,9,10,"hola",true];
  product.push(false);
  product.push(25);
  product.push("chau");



  //de esta manera si inicializamos el array declarando que tipos de datos puede aceptar y le damos el valor solamente de string y boolean podemos agregar tranquilamente cualquier otro tipo de dato que no va a tirar ningun error.
  let mixed: (number | string | boolean | object)[]= ['hola',true];

  mixed.push(12);
  mixed.push('as');
  mixed.push(false);
  mixed.push({});
  mixed.push([]);
})();