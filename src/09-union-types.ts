(()=>{
  let userId: string | number;
  userId = 12123;
  userId = "fsd";

  function greeting(myText: string|number){
    if(typeof myText === "string"){
      console.log(`string ${myText.toLocaleLowerCase()}`);
    }else{
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting("Diego");
  greeting(12.11213258);
})();