// FullMenu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FullMenu.css';

const FullMenu = () => {
  const navigate = useNavigate();
  
  const menuSections = [
    {
      title: 'Coffee Classics',
      items: [
        { name: 'Double Espresso', price: 'Rp. 20.000', desc: 'Concentrated extraction of our house geometric blend. Rich, syrupy, and bright.' },
        { name: 'Flat White', price: 'Rp. 25.000', desc: 'Velvety micro-foam poured over a double ristretto shot for a balanced, creamy profile.' },
        { name: 'Traditional Macchiato', price: 'Rp. 24.000', desc: 'Double espresso marked with a single dollop of steamed milk foam.' }
      ]
    },
    {
      title: 'Signature Brews',
      items: [
        { name: 'Emerald Latte', price: 'Rp. 22.000', desc: 'Pandan-infused oat milk, single origin espresso, finished with toasted coconut flakes.' },
        { name: 'Forest Cold Brew', price: 'Rp. 26.000', desc: '18-hour steep with notes of pine and wild berries, served over a single clear ice sphere.' },
        { name: 'Golden V60', price: 'Rp. 29.000', desc: 'Precision pourover of our seasonal micro-lot. Citrus acidity with a clean honey finish.' }
      ]
    },
    {
      title: 'Light Bites',
      items: [
        { name: 'Truffle Brioche', price: 'Rp. 34.000', desc: 'Toasted house brioche, whipped truffle butter, and a dusting of volcanic sea salt.' },
        { name: 'Açaí Triangle Bowl', price: 'Rp. 40.000', desc: 'Organic açaí base topped with house granola, dragonfruit, and raw honeycomb.' },
        { name: 'Miso Glazed Cookies', price: 'Rp. 37.000', desc: 'Dark chocolate chunks with a white miso caramel center. Sweet and savory balance.' }
      ]
    },
    {
      title: 'Hearty Meals',
      items: [
        { name: 'Forest Toast', price: 'Rp. 42.000', desc: 'Wild foraged mushrooms, garlic confit, thyme, and micro-greens on toasted sourdough.' },
        { name: 'Geometric Benedict', price: 'Rp. 45.000', desc: 'Poached organic eggs, smoked salmon, and yuzu hollandaise on square rye crisps.' },
        { name: 'Smoked Duck Salad', price: 'Rp. 39.000', desc: 'Tea-smoked duck breast, bitter greens, orange segments, and balsamic reduction.' }
      ]
    }
  ];

  return (
    <div className="full-menu-page">
      {/* Tombol Back */}
      <button className="menu-back-btn" onClick={() => navigate('/')}>
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Home
      </button>

      {/* Header */}
      <div className="menu-header">
        <span className="menu-subtitle">Kotak Segitiga</span>
        <h1 className="menu-title">Full Menu</h1>
        <div className="menu-divider"></div>
      </div>

      {/* Content */}
      <div className="menu-content">
        <div className="menu-grid">
          {menuSections.map((section, index) => (
            <section key={index} className="menu-section">
              <h2 className="menu-section-title">{section.title}</h2>
              <div className="menu-items">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="menu-item-header">
                      <h3 className="menu-item-name">{item.name}</h3>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="menu-footer-note">
          <p>Prices exclude 10% tax and 5% service charge</p>
        </div>
      </div>

      <div className="menu-footer">
      </div>
    </div>
  );
};

export default FullMenu;