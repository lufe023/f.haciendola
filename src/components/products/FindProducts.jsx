import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getConfig from '../utils/getConfig';
import Spinner from '../utils/Spinner';
import Card from '../dashboard/Card';

const FindProducts = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(null);
  const fetchProducts = (term) => {
  

    
    const URL = `${import.meta.env.VITE_API_SERVER}/api/v1/products/busqueda/${term}?offset=0&limit=20`;
    if(term.length >= 3){
      setLoading(true);
    axios.get(URL, getConfig())
      .then(res => {
        setProducts(res.data.products);
        setLoading(false);
        setTotal(res.data.total)
      })
      .catch(err => {

        setLoading(false);
        setProducts([])
        setTotal(null)
      });
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchProducts(searchTerm);
    }
  }, [searchTerm]);

  const renderMessage = () => {
    if (searchTerm?.length > 2) {
      if (total > 0) {
        return `Se encontraron ${total} productos`;
      } else {
        return "No pude encontrar nada :'(";
      }
    } else {
      return '';
    }
  };

  return (
    <div>
      {loading && <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><Spinner /></div>}
      <div className="row" style={{padding:"20px"}}><h5>{renderMessage()}
</h5>
</div>
      <div className="row">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FindProducts;
