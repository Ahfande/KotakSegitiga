import React, { useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import FullMenu from './FullMenu'; // Import halaman menu
import logoIcon from './assets/logoIcon.png';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<FullMenu />} />
      </Routes>
    </Router>
  );
}

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

const HomePage = () => {
    useScrollAnimation();
  return (
    <div className="app dark">
      <div className="layout-container">
        <Navbar />
        <main className="main-content">
          <HeaderSection />
          <FilosofiSection />
          <WhoWeAreSection />
          <CollectionSection />
          <MomenKitaSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-area">
            <img src={logoIcon} className='logo-icon' />
          <h2 className="logo-text">Kotak Segitiga</h2>
        </div>

        <div className="nav-menu-desktop">
          <nav className="nav-links">
            <a href="#AboutUs">About Us</a>
            <a href="#Collection">Collection</a>
            <a href="#Location">Location</a>
          </nav>
          <button className="nav-button">
            Visit Us
          </button>
        </div>

        <div className="nav-menu-mobile">
          <span className="material-symbols-outlined menu-icon">menu</span>
        </div>
      </div>
    </header>
  );
};

// Header Section Component
const HeaderSection = () => {
   const navigate = useNavigate();
  return (
    <section className="header-section">
      <div className="header-grid">
        <div className="header-content">
          <div className="header-text">
            <span className="header-subtitle">Modern Forest Sanctuary</span>
            <h1 className="header-title">
              Nature in <br /><span className="header-title-highlight">Every Sip</span>
            </h1>
            <p className="header-description">
              Rasakan pertemuan antara presisi geometris dan kopi artisinal di tempat perlindungan hutan modern kami
            </p>
          </div>
          <div className="header-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/menu')}>Explore Menu</button>
            <button className="btn btn-secondary">Our Story</button>
          </div>
        </div>

        <div className="header-image-wrapper">
          <div className="header-image-border"></div>
          <div 
            className="header-image"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzelJD3R_OvGy0j1rIM3_xHP0CiaHZbNkvR2s-FBbEduQc8moXFn7yaXfwBUW-D5C5-X5V0BrUp3wfHULv41jznnmx1vtbRpthPLzgKvvY7ZQj5Qh6pLhs6nR9DKbDphCjfdQBEkV5rdChdHYu_0lGQZopK3rw30BKmjNT69nqb9F-2CLA1BzLZMYBGWfZ8ByudLm2Iih3GuLaA9e50KocVLaQeFy6bqpHf8cvuTkL9LD04KbHoZrqbF52shMMA0fK3jp7WK-x3ls")'
            }}
          >
            <div className="header-image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Filosofi Section Component
const FilosofiSection = () => {
  return (
    <section className="filosofi-section">
      <div className="filosofi-container">
        <div className="section-header">
          {/* <span className="section-subtitle">Asal Mula</span> */}
          <h2 className="section-title">Filosofi Kami</h2>
          <div className="section-divider"></div>
        </div>

        <div className="filosofi-grid">
          <div className="filosofi-item">
            <div className="filosofi-icon-wrapper">
              <div className="filosofi-icon kotak-icon"></div>
            </div>
            <div className="filosofi-text">
              <h3 className="filosofi-title">
                Kotak
              </h3>
              <p className="filosofi-description">
                Mewakili stabilitas dan kenyamanan fisik dari ruang perlindungan kami. Seperti empat sudut ruangan, Kotak adalah pondasi kami menyediakan ruang yang terstruktur, aman, dan ramah untuk refleksi dan koneksi.
              </p>
            </div>
          </div>

          <div className="filosofi-item">
            <div className="filosofi-icon-wrapper segitiga-wrapper">
              <svg className="segitiga-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 4L4 20H20L12 4Z"></path>
              </svg>
            </div>
            <div className="filosofi-text">
              <h3 className="filosofi-title">
                Segitiga
              </h3>
              <p className="filosofi-description">
                Simbol pertumbuhan dan kreativitas. Layanan kami dibangun di atas tiga pilar fundamental: Rasa, Suasana, dan Komunitas. Menunjuk ke atas dan dinamis, mendorong kami untuk terus mengembangkan keahlian kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Who We Are Section Component
const WhoWeAreSection = () => {
  return (
    <section id='AboutUs' className="whoweare-section">
      <div className="whoweare-container">
        <div className="whoweare-header">
          <h2 className="whoweare-title">About Us</h2>
          <p className="whoweare-description">
            Kotak Segitiga adalah destinasi kuliner butik tempat desain minimalis bertemu dengan kedalaman hutan. Kami menjembatani celah antara presisi geometris dan rasa organik, menciptakan ruang bagi mereka yang mencari ketenangan di jantung kota.
          </p>
        </div>

        <div className="whoweare-grid">
          <div className="whoweare-card">
            <div className="card-icon">
              <span className="material-symbols-outlined">coffee_maker</span>
            </div>
            <h3 className="card-title">Sangrai Artisanal</h3>
            <p className="card-description">
              Biji kopi single origin yang bersumber langsung dari kebun mikro berkelanjutan, disangrai dalam jumlah kecil untuk menjaga karakter uniknya.
            </p>
          </div>

          <div className="whoweare-card">
            <div className="card-icon">
              <span className="material-symbols-outlined">eco</span>
            </div>
            <h3 className="card-title">Bahan Lokal</h3>
            <p className="card-description">
              Susu gandum organik dan bahan botani lokal untuk infusi unik yang menghadirkan cita rasa hutan di pagi hari.
            </p>
          </div>

          <div className="whoweare-card">
            <div className="card-icon">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h3 className="card-title">Ruang Modern</h3>
            <p className="card-description">
              Tempat perlindungan hijau hutan yang canggih, dirancang dengan harmoni matematis untuk menumbuhkan fokus dan ketenangan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Collection Section Component
const CollectionSection = () => {
  return (
    <section id='Collection' className="collection-section">
      <div className="collection-container">
        <div className="collection-header">
          <div className="collection-title-wrapper">
            <span className="collection-subtitle">Sorotan Musiman</span>
            <h2 className="collection-title">Koleksi Terpilih</h2>
          </div>
          <a href="/menu" className="collection-link">
            Lihat Menu Lengkap <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="collection-grid">
          <div className="collection-item">
            <div className="item-image-wrapper">
              <div className="item-image-overlay"></div>
              <div 
                className="item-image"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFMYXSDDi_cH89AsYRiq3jk4A4t9P7beRIEhGJFY73pNdeD_gnmLAP_e2ipjquboagr4pWvBQDaW0NV8m1EZeBA7m6K9hEgVvj1wK2_C59K9DQqw7iP-Q9M8OGbMyGjV1SEcZjuLDZqwLbn_ZFpxlB5wB88FAGM8vsU6MnWCTRGq1EJIxUnPtjMerNx3ylHMIwOUeUGYGJZKzIWC1ROOWZTLQnNFMMKD5bfTtS93nM8chHnloqXFKzpoAsizUjRQHVd-fOQa-NJFg")'
                }}
              ></div>
              <div className="item-price">
                <span>Rp 45.000</span>
              </div>
            </div>
            <div className="item-details">
              <h3 className="item-name">Emerald Latte</h3>
              <p className="item-description">
                Biji kopi single origin, susu gandum organik, ekstrak pandan, disempurnakan dengan sentuhan kelapa sangrai.
              </p>
            </div>
          </div>

          <div className="collection-item">
            <div className="item-image-wrapper">
              <div className="item-image-overlay"></div>
              <div 
                className="item-image"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCey8V4SDck-XfD2Wbo6Z049j_hdEXGhxabGlPzKrh2tzONywYgAQSp_k9hXClC7S4nEU_SZ-2ABC6UdCIAKRvRLwf55NuWFngtpi_c3jpULD4gqPz6IFTnoQeUibM7vJOWmtNt2fVxp0PKgNUD80HZDn2Stg44ecLyzgYOa-wlI-_oxn7lCKI8cStZ9XmifwuL8LUmloYBcf20iXR3wxpyB0hnBio4A0zvK6WGKjxSa5kn0ZPMVElZf6kH8y3llLzhKcmRUUQKSeo")'
                }}
              ></div>
              <div className="item-price">
                <span>Rp 65.000</span>
              </div>
            </div>
            <div className="item-details">
              <h3 className="item-name">Forest Toast</h3>
              <p className="item-description">
                Roti sourdough artisanal dengan jamur liar lokal, minyak truffle, dan sayuran mikro organik.
              </p>
            </div>
          </div>

          <div className="collection-item">
            <div className="item-image-wrapper">
              <div className="item-image-overlay"></div>
              <div 
                className="item-image"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAalgnp3z_iigsFl-Xbc2xZcGVD-ow03DqnkcBBE-CHpKWHuBCK4YpaLI1APmD_LY4gvRDo8qooB2C3Pbw_L62B-kB6-yOatKYyv1BnJ_ziHoENPCHbWqB_KVqJ5rE-TVmih44-czKDLMlSzMCCfqwN5MYN61ERcf1iT9gM1RRJ4STL3SmzqPAX4J-k5229abfRqqBWPx1qgjMa8A7pxCMcqcZMpN9nIFRuSfI-uWTqPPyWLJDzezwJgUh7ZOwsL4wu6MFC9eNfhC8")'
                }}
              ></div>
              <div className="item-price">
                <span>Rp 40.000</span>
              </div>
            </div>
            <div className="item-details">
              <h3 className="item-name">Golden Pourover</h3>
              <p className="item-description">
                Biji kopi micro-lot musiman dengan aroma jeruk yang cerah dan sensasi akhir bunga madu yang bersih.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MomenKitaSection = () => {
  
  // Data untuk Instagram posts
  const instagramPosts = [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/1200x/d1/30/af/d130afa9e01149ed535a652c95c9508e.jpg',
      likes: '2.4k',
      comments: '124'
    },
    {
      id: 2,
      imageUrl: 'https://i.pinimg.com/736x/ff/e7/38/ffe738b1b9ca474c3ae5611c5391373e.jpg',
      likes: '1.8k',
      comments: '86'
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/1200x/ed/bc/79/edbc799d4d5dc98228d56dd7d23535b3.jpg',
      likes: '3.1k',
      comments: '152'
    },
    {
      id: 4,
      imageUrl: 'https://i.pinimg.com/1200x/00/04/6d/00046dc3d9832be8ebf14a3fe7369ec6.jpg',
      likes: '1.2k',
      comments: '42'
    }
  ];

  return (
    <section className="momen-kita-section">
      <div className="momen-kita-container">
        {/* Header Section */}
        <div className="momen-kita-header">
          <span className="momen-kita-subtitle">LIFE AT KOTAK SEGITIGA</span>
          <h2 className="momen-kita-title">Keseruan Di Instagram</h2>
          <div className="momen-kita-divider"></div>
        </div>

        {/* Instagram Grid */}
        <div className="instagram-grid">
          {instagramPosts.map((post) => (
            <div key={post.id} className="instagram-post">
              <div 
                className="post-image"
                style={{ backgroundImage: `url('${post.imageUrl}')` }}
              >
                <div className="post-overlay">
                  <div className="post-stats">
                    <div className="stat-item">
                      <span className="material-symbols-outlined">favorite</span>
                      <span>{post.likes}</span>
                    </div>
                    <div className="stat-item">
                      <span className="material-symbols-outlined">chat_bubble</span>
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Button */}
        <div className="instagram-button-wrapper">
          <button className="instagram-button">
            <svg className="instagram-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
            @KotakSegitiga
          </button>
        </div>
      </div>
    </section>
  );
};


// Footer Component
const Footer = () => {
  return (
    <footer id='Location' className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-area">
              <div className="footer-logo-icon">
                <img src={logoIcon} className='logo-icon' />
              </div>
              <h2 className="footer-logo-text">Kotak Segitiga</h2>
            </div>
            <p className="footer-tagline">
              A minimalist coffee ritual inspired by the geometry of nature.
            </p>
            <div className="footer-social">
              <i className="fab fa-instagram social-icon"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-tiktok"></i>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Explore</h4>
            <ul>
              <li><a href="#">Menu Collection</a></li>
              <li><a href="#">Our Process</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          <div className="footer-hours">
            <h4 className="footer-hours-title">Open</h4>
            <ul>
              <li><span>Mon - Fri</span> <span>10:00 - 21:00</span></li>
              <li><span>Sat - Sun</span> <span>08:00 - 23:00</span></li>
            </ul>
          </div>

          <div className="footer-location">
            <h4 className="footer-location-title">Find Us</h4>
            <p className="location-address">
              Jalan Geometris No. 42, <br />Distrik Hutan, <br />Jakarta Selatan
            </p>
            <div className="location-map">
              <div 
                className="map-image"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRwwYaI64npv-hA7fGc6F4w4GZOJetduWWj7EziouTC4G3ofydCwVfkDE44o3ThNeFTyKlBwxetTkgIt92hWz9IRNHwGO9w7Mbw9Rs1_Ez3ky4w4qq6lXyNdytl8sB7mukZOzGqw18pm3Ntub0_tpgLBAvcKrmGfT4VX5yTiVLSBQzJOgF-Su8tWxmhSPIOi6IU06XtuyOvvU3ctpeD9uqzjoLqYokf2w130WBbnPZoz0jcD76-2goBHGk3UY03CyDEcU8Es2OHis")'
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2024 Kotak Segitiga</p>
        </div>
      </div>
    </footer>
  );
};

export default App;