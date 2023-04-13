(()=>{
  // forma inferida, dejamos que ts infiera en la variable y detecte que es un boolean(manera recomendable);
  let isEnable = true;
  // isEnable = "1234";
  // isEnable = [];
  isEnable = false;

  // forma explicita, le decimos a ts que isNew es boolean pero no es necesario hacerlo.
  let isNew: boolean = false;
  console.log('isNew',isNew);
  isNew = true;
  console.log('isNew',isNew);

  const random  = Math.random();
  console.log('random',random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew',isNew);


})();