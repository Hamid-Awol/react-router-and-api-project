import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Iphone = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2>Loading iPhone products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2>Error: {error}</h2>
        <p>Make sure the backend server is running on http://localhost:5000</p>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-5">iPhone Models</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src={product.image_url} 
                className="card-img-top" 
                alt={product.name}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">{product.description}</p>
                <p className="card-text fw-bold text-primary">{product.price}</p>
                <Link to={`/iphone/${product.id}`} className="btn btn-primary w-100">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iphone;
