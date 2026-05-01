import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2>Loading product details...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2>Error: {error}</h2>
        <Link to="/iphone" className="btn btn-primary">
          Back to iPhones
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <Link to="/iphone" className="btn btn-secondary mb-4">
        ← Back to all iPhones
      </Link>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image_url}
            className="img-fluid rounded"
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">{product.name}</h1>
          <p className="lead">{product.description}</p>
          <h3 className="text-primary mb-4">{product.price}</h3>
          <button className="btn btn-primary btn-lg me-3">Buy Now</button>
          <button className="btn btn-outline-secondary btn-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
