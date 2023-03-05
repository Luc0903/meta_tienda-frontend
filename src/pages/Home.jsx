import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';

function Home() {
  const [shopProducts, setShopProducts] = useState([]);

  async function getSomeProducts() {
    try {
      const {
        data: { products },
      } = await axios('http://localhost:8000/api/products');
      setShopProducts([...products]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSomeProducts();
  }, []);

  return (
    <main className=' flex'>
      <NavBar />
      {/* {getSomeProducts()} */}
      {shopProducts &&
        shopProducts.map((item) => {
          return (
            <div key={item._id} className=' flex flex-col'>
              nombre del producto {item.name}
              categoria: {item.category}
              descripción: {item.description}
              precio: {item.price}
            </div>
          );
        })}
    </main>
  );
}

export default Home;
