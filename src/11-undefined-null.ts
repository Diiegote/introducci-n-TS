(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | null = null;
  myString = 'hello';

  function hi (name:string | null){
    let hello = "Hola ";
    if(name){
      hello += name;
    }else{
      hello += "noBoddy";
    }
    console.log(hello);
  };

  // es la misma funcion que arriba pero usamos el optional chaning que seria el signo de pregunta.
  function hiV2 (name:string | null){
    let hello = "Hola ";
    hello += name?.toLowerCase() || "noBody"
    console.log(hello);
  };
  hiV2("Diego");
  hiV2(null);
})();