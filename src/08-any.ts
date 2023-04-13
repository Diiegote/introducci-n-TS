(() => {

  // cuando declaramos una variable que es any podemos asignarle cualquier tipo de valor ya que le estamos indicando que deje de ser tipada. No es recomendable utilizar any es visto como una mala practica.

  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = "100";
  myDinamicVar = [];
  myDinamicVar = {};

  // de esta manera usando el as podemos decirle a la variable myDinamicVar que deje de ser any y sea tratada como string.De esta manera ya nos deja usar un metodo de string como el tolocalLorwerCase.
  myDinamicVar = "hola";
  const rta = (myDinamicVar as string).toLocaleLowerCase();
  console.log(rta)

  // otra manera de cambiarle el tipo a una variable que ya es de tipo any es:
  myDinamicVar = 1234;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log(rta2);


})();