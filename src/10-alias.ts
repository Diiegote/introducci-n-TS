(() => {
  type UserID = string | number;
  let userId:UserID


  // literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = "L";
  shirtSize = "XL";
  shirtSize = "M";

  function greeting(userId: UserID,size:Sizes) {

    if (typeof userId === "string") {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }
  greeting(12345,"XL");
  greeting("fdsdf",'S');
})();