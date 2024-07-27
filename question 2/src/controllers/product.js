let products = [];

const getProducts = async (req, res) => {
  const { companyname = "FLP", categoryname } = req.params;
  const { top = 10, minPrice = 0, maxPrice = 10000 } = req.query;

  let url = `  http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

  const resp = await fetch(url, { method: "GET" });
console.log(resp)
  const data = await resp.json();

  products = data.map((product) => ({ ...product, id: Math.random() }));

  return res.status(200).json({products});
};


const getProduct = async (req, res) => {
    const { productid } = req.params;
  
    
    
    const product = products.find(product => product.id == productid);
  
    return res.status(200).json({product});
  };
  

export { getProducts,getProduct };
