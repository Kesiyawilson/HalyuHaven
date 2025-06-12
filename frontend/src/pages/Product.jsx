import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './Product.css';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  // ✅ useEffect without missing dependency warning
  useEffect(() => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    const productHasSizes = productData.sizes && productData.sizes.length > 0;
    addToCart(productData._id, size, productHasSizes);
  };

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 product-section">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Left Image Section */}
        <div className="product-display-wrapper">
          {/* Thumbnails */}
          <div className="product-thumbs-container">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                className={`product-thumb ${image === item ? 'selected-thumb' : ''}`}
                alt=""
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="product-main-image-container">
            <img src={image} alt="" />
          </div>

          {/* Product Details */}
          <div className="product-title-container">
            <h2 className="product-title" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>
              {productData.name}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
              <img src={assets.star_icon} alt="star" style={{ width: '1rem', height: '1rem' }} />
              <img src={assets.star_icon} alt="star" style={{ width: '1rem', height: '1rem' }} />
              <img src={assets.star_icon} alt="star" style={{ width: '1rem', height: '1rem' }} />
              <img src={assets.star_dull_icon} alt="star" style={{ width: '1rem', height: '1rem' }} />
              <span style={{ marginLeft: '8px', fontSize: '16px', color: '#555' }}>(122)</span>
            </div>

            <p style={{ fontSize: '2rem', fontWeight: '500', marginTop: '1.25rem' }}>
              {currency}{productData.price}
            </p>

            <p style={{ color: '#6B7280', width: '80%', marginTop: '1.25rem' }}>
              {productData.description}
            </p>

            {productData.sizes && productData.sizes.length > 0 && (
              <div className="flex flex-col gap-4 my-8">
                <p>Select Size</p>
                <div className="size-selector">
                  {productData.sizes.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSize(item)}
                      className={`size-button ${item === size ? 'active' : ''}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button onClick={handleAddToCart} className="add-to-cart-button">
              ADD TO CART
            </button>

            <hr className="product-divider" />

            <div className="light-gray-text">
              <p>100% original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        {/* Description and Review Section */}
        <div className="description-review-container">
          <div className="description-box">Description</div>
          <div className="review-box">Reviews (122)</div>
        </div>

        <div className="description-paragraph-box">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services
            over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their
            products, interact with customers, and conduct transactions without the need for a physical presence.
          </p>
          <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices,
            and any available variations (e.g., sizes, colours). Each product usually has its own dedicated page with
            relevant information.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
