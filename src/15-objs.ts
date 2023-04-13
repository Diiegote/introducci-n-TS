(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (product: Product) => {
    products.push(product);
  };
  addProduct({
    title: "Producto1",
    createdAt: new Date(1993, 9, 22),
    stock: 12,
    size: "S"
  });
  addProduct({
    title: "Producto2",
    createdAt: new Date(1993, 5, 22),
    stock: 28
  });
  console.log(products)
})();