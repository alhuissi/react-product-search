import { useEffect, useState } from 'react';
import { Header } from './components/header.js';
import { ProductListTable } from './components/productListTable.js';
import { SearchBox } from './components/productSearchBox.js';
import data from './products.json';

const productsArray = data.products;

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(productsArray);

  const filterProducts = (query) => {
    if (!query) {
      setProducts(productsArray);
    } else {
      const filteredProducts = productsArray.filter((product) => product.description.toLowerCase().includes(query.toLowerCase())
        || product.code.toLowerCase().includes(query.toLowerCase()));
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    filterProducts(searchQuery)
  }, [searchQuery]);

  return (
    <div>
      <Header />
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductListTable products={products} />
    </div>
  );
}

export default App;
