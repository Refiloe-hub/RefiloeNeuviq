import React from "react";

const Services: React.FC = () => {
  return (
    <>
      <div className="services-page">
        <h1 className="services-title">Our Services</h1>
        <p style={{ color: "white" }}>
        Shaping the future of business through forward-thinking solutions and global innovation trends
</p>

        <div className="services-container">
          <div className="service-card">
            <img src="/sdev.jpg" alt="Software Development" />
            <h3>Software Development</h3>
            <p>Building scalable and secure web and mobile applications tailored to your business needs.</p>
          </div>

          <div className="service-card">
            <img src="/dataan.jpg" alt="Data Analytics" />
            <h3>Data Analytics</h3>
            <p>Transform raw data into actionable insights to drive business decisions and optimize performance.</p>
          </div>

          <div className="service-card">
            <img src="/AI.jpg" alt="Artificial Intelligence" />
            <h3>Artificial Intelligence</h3>
            <p>Leverage AI and machine learning to automate processes and enhance user experience.</p>
          </div>

          <div className="service-card">
            <img src="/seo.png" alt="SEO" />
            <h3>SEO</h3>
            <p>Improve search engine rankings and drive organic traffic with expert SEO strategies.</p>
          </div>

          <div className="service-card">
            <img src="/blockchain.jpg" alt="Blockchain" />
            <h3>Blockchain</h3>
            <p>Develop secure and decentralized blockchain solutions for smart contracts and financial applications.</p>
          </div>

          <div className="service-card">
            <img src="/machinel.jpg" alt="Machine Learning" />
            <h3>Machine Learning</h3>
            <p>Implement advanced machine learning models to predict trends and enhance decision-making.</p>
          </div>
        </div>
      </div>

      <style>
        {`
          /* Ensures everything is scrollable */
          html, body {
            margin: 0;
            padding: 0;
              overflow: auto;
              min-height: 150vh;
          }

          .services-page {
            background: linear-gradient(to bottom, #1a0136,rgb(233, 134, 167), #162344);
      
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            width: 100vw; /* Ensures full width */
            overflow-y: auto; /* Enables scrolling */
            padding-top: 80px;
          }

          .services-title {
            color: white;
            font-size: 2.5rem;
            text-align: center;
            width: 100%;
            margin-top: 20px;
          }

          .services-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            width: 90%;
            max-width: 1200px;
            justify-content: center;
            margin-top: 20px;
         
          }

          .service-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            text-align: center;
            width: 100%;
            height: 100%;
            max-width: 350px;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
          }

          .service-card:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(255, 255, 255, 0.4);
          }

          .service-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .service-card h3 {
            color: #ae1aff;
            font-size: 1.2rem;
            margin: 10px 0;
          }

          .service-card p {
            font-size: 0.9rem;
            padding: 0 10px 20px;
            color: black;
          }

          @media (max-width: 900px) {
            .services-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 600px) {
            .services-container {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  );
};

export default Services;