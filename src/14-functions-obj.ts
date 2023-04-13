(()=>{
  const login = (data:{email:string,password:number})=>{
   console.log(data.email, data.password);
  }
  login({
   email:"diego.martinotti@hotmail.com",
   password:123456
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products:any[] =[];

  const addProduct = (data:{
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  })=>{
    products.push(data);
  };
  addProduct({
    title: "Producto1",
    createdAt: new Date(1993,9,22),
    stock: 12,
    size: "S"
  });
  addProduct({
    title: "Producto2",
    createdAt: new Date(1993,5,22),
    stock: 28
  });
  console.log(products)
})();