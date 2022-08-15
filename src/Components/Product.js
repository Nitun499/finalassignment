import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
  return (
    <section>
      <div className="products">
        {Array(6)
          .fill(0)
          .map((data) => (
            <ProductCard />
          ))}
      </div>
    </section>
  );
};

export default Product;
