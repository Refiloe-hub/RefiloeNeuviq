import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
    <div className="hero-content">
        <div className="text-section">
            <h1>Drive Innovation. Foster Growth. Achieve Excellence.</h1>
            <p>
                At <strong>Neuviq Solutions</strong>, we deliver advanced solutions in
                <strong> Software Development, Data Analytics, Machine Learning, Blockchain,</strong> and
                <strong> Artificial Intelligence</strong> to help businesses lead in the digital future.
            </p>
            <a href="/contact" className="cta-button">Get Started</a>
        </div>
        <div className="image-section">
            <img src="/hometeam.png" alt="Neuviq Solutions" />
        </div>
    </div>
</div>

      {/* Services Section */}
      <div className="services">
        <h2>Our Expertise</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="/software-developer.jpg" alt="Software Development" />
            <h3>Software Development</h3>
            <p>Building scalable and secure software tailored to your needs.</p>
          </div>
          <div className="service-card">
            <img src="/data analytics.jpg" alt="Data Analytics" />
            <h3>Data Analytics</h3>
            <p>Transforming raw data into actionable insights.</p>
          </div>
          <div className="service-card">
            <img src="/machine learning.jpg" alt="Machine Learning" />
            <h3>Machine Learning</h3>
            <p>Automating processes with intelligent AI-driven solutions.</p>
          </div>
          <div className="service-card">
            <img src="/bchain.jpg" alt="Blockchain Solutions" />
            <h3>Blockchain Solutions</h3>
            <p>Enhancing security and transparency with decentralized technology.</p>
          </div>
          <div className="service-card">
            <img src="/image-seo.png" alt="SEO" />
            <h3>SEO</h3>
            <p>Creating immersive experiences for businesses and consumers.</p>
          </div>
          <div className="service-card">
            <img src="/ai2.jpeg" alt="AI" />
            <h3>AI</h3>
            <p>Creating immersive experiences for businesses and consumers.</p>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="case-studies">
        <h2>Case Studies</h2>
        <p>Explore our successful projects and see how we have helped businesses thrive.</p>
        <a href="/case-studies" className="cta-button">View Here</a>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-card">
          <p>"Neuviq Solutions transformed our business with their AI-driven insights. Highly recommend!"</p>
          <strong>- Sarah Johnson, CEO TechFlow</strong>
        </div>
        <div className="testimonial-card">
          <p>"Outstanding blockchain solutions that enhanced our security and efficiency."</p>
          <strong>- Mark Adams, CFO CryptoWave</strong>
        </div>
      </div>

      {/* About Preview with Picture */}
      <div className="about-preview">
        <h2>What sets us apart?</h2>
        <div className="about-content">
          <div className="text-section">
            <p>
              We bring <strong>innovation, expertise, and customer-focused solutions</strong> to help businesses
              thrive in the digital era. Our team of industry experts ensures high-quality and future-ready
              implementations.
            </p>
            <a href="/about" className="cta-button">Learn More</a>
          </div>
          <div className="image-section">
            <img src="/whyus.png" alt="Neuviq Solutions Team" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Let's Build Something Amazing Together</h2>
        <p>Reach out to us for a consultation and take your business to the next level.</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </div>
    </div>
  );
};

export default Home;