import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div className="about-container">
        {/* About Neuviq Section with image beside text */}
        <div className="about-heading">
          <div className="about-intro">
            <div className="about-text">
              <h1>About Neuviq Solutions</h1>
              <p>
  <strong>Neuviq Solutions</strong> is a leading consulting firm at the forefront of innovation, specializing in <strong>
    Software Development, Data Analytics, Artificial Intelligence, Blockchain,</strong> and <strong>Virtual Reality.</strong>
   We collaborate with organizations to develop transformative solutions that drive growth, efficiency, and long-term success in an ever-evolving digital landscape.
</p>
            </div>
            <div className="about-image">
              <img src="/team.png" alt="Neuviq Team" />
            </div>
          </div>
        </div>

        {/* Overlay Section for Mission and Why Choose Us */}
        <div className="about-content">
        <div className="info-section">
  <div className="info-box">
    <h2>Our Mission</h2>
    <p>
      At Neuviq Solutions, our mission is to empower businesses globally by providing <strong>innovative, scalable, and future-ready technology solutions</strong> that drive meaningful change. We leverage cutting-edge advancements in <strong>Artificial Intelligence, Blockchain, Cloud, and Data Analytics</strong> to help organizations navigate the complexities of the digital era and achieve sustainable growth.
    </p>
  </div>
  <div className="info-box">
    <h2>Why Choose Us?</h2>
    <ul>
      <li><strong>✔ Cutting-Edge Technology:</strong> We lead with <strong>AI, Blockchain, and Cloud innovations</strong> to stay ahead of the curve.</li>
      <li><strong>✔ Customized Solutions:</strong> Tailored strategies designed to meet your specific business objectives.</li>
      <li><strong>✔ Proven Expertise:</strong> A dedicated team of professionals with a track record of success.</li>
      <li><strong>✔ Collaborative Partnership:</strong> Building long-term relationships through client-centered innovation.</li>
    </ul>
  </div>
</div>
        </div>
      </div>

      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          box-sizing: border-box;
          overflow: auto;
          min-height: 150vh;
        }

        .about-container {
          background-image: url("/about.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          color: white;
          padding: 100px 20px;
          box-sizing: border-box;
        }

        .about-heading {
          max-width: 1000px;
          margin-bottom: 50px;
          width: 100%;
        }

        .about-intro {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        .about-text {
          flex: 1;
          text-align: left;
          min-width: 300px;
        }

        .about-text h1 {
          font-size: 2.5rem;
          color: #bd2e95;
          margin-bottom: 20px;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .about-image {
          flex: 1;
          text-align: center;
        }

        .about-image img {
          max-width: 100%;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .about-content {
          background: rgba(0, 0, 0, 0.7);
          padding: 40px;
          border-radius: 10px;
          max-width: 1000px;
          width: 90%;
          box-sizing: border-box;
          margin-top: 20px;
        }

        .info-section {
          display: flex;
          flex-direction: row;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .info-box {
          flex: 1 1 400px;
          min-width: 300px;
        }

        .info-box h2 {
          color: #ff44a0;
          margin-bottom: 15px;
        }

        .info-box p,
        .info-box li {
          font-size: 1rem;
          line-height: 1.5;
        }

        .info-box ul {
          list-style: none;
          padding: 0;
          margin-top: 10px;
          text-align: left;
        }

        .info-box li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
        }

        .info-box li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #ffcc00;
        }

        @media (max-width: 768px) {
          .about-intro {
            flex-direction: column;
            text-align: center;
          }

          .about-text {
            text-align: center;
          }

          .about-text h1 {
            font-size: 2rem;
          }

          .about-text p {
            font-size: 1rem;
          }

          .about-image img {
            width: 80%;
          }

          .info-section {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default About;