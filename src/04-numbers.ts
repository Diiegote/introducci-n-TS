(() => {
  // de esta manera ts entiende que la variable es un numero y no es necesario indicar. pero si queremos lo podemos hacer
  let myProductPrice = 100;
  myProductPrice = 12;
  console.log("myProductPrice", myProductPrice);

  // aca le indicamos de manera explicita que la variable es un number pero no es necesario ya que ts lo hace por nosotros
  let customerAge: number = 28;
  // customerAge = customerAge + '1' ; // esto daria 281 en js pero en ts no nos deja hacer esta suma
  customerAge = customerAge + 1;
  console.log("customerAge", customerAge);

  // si nosotros queremos inicalizar una variable sin darle un valor ahi si tenemos que indicar que tipo de dato es
  let productInStock: number ;

  // console.log("productInStock", productInStock) // el console no lo podemos usar ya que la variable no tiene valor

  let discount = parseInt("123");
  console.log("discount",discount);





})();