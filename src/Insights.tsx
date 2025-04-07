import React from "react";

const Insights: React.FC = () => {
  return (
    <>
      <div className="insights-container">
        <div className="insights-header">
          <h1>Industry Insights & Articles</h1>
          <p>Stay updated with the latest trends in technology and innovation.</p>
        </div>

        <div className="insights-content">
          {/* Featured Articles */}
          <div className="featured-articles">
            <h2>Featured Articles</h2>
            <div className="article-list">
              <div className="article-card">
                <h3>The Future of AI in Business</h3>
                <p>Discover how artificial intelligence is transforming industries worldwide.</p>
                <a
                  href="https://hbr.org/2023/09/the-business-of-artificial-intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
              <div className="article-card">
                <h3>Cloud Computing Evolution</h3>
                <p>Explore how cloud infrastructure is reshaping IT strategies in 2025.</p>
                <a
                  href="https://www.ibm.com/cloud/learn/cloud-computing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
              <div className="article-card">
                <h3>AR & VR in Modern Education</h3>
                <p>How immersive tech is transforming learning environments across the globe.</p>
                <a
                  href="https://edtechmagazine.com/k12/article/2023/06/ar-and-vr-classroom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Recent Articles */}
          <div className="recent-articles">
            <h2>Recent Articles</h2>
            <div className="article-list">
              <div className="article-item">
                <h3>Breaking Down Blockchain Technology</h3>
                <p>A simplified guide to understanding blockchain and its potential impact.</p>
                <a
                  href="https://www.investopedia.com/terms/b/blockchain.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
              <div className="article-item">
                <h3>Machine Learning in Healthcare</h3>
                <p>How AI-driven solutions are revolutionizing the healthcare sector.</p>
                <a
                  href="https://www.forbes.com/sites/forbestechcouncil/2022/12/01/how-machine-learning-is-revolutionizing-healthcare/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
              <div className="article-item">
                <h3>Cybersecurity Trends for 2025</h3>
                <p>Key security challenges and solutions businesses should prepare for.</p>
                <a
                  href="https://www.techradar.com/news/the-top-cybersecurity-trends-you-need-to-know-in-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .insights-container {
          background-image: url("/insights.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 100vw;
          min-height: 100vh;
          text-align: center;
          color: white;
          padding: 40px 20px;
            padding-top: 80px; /* Add space from the top */
        }

        .insights-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .insights-header p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }

        .insights-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1000px;
          margin: auto;
        }

        .featured-articles, .recent-articles {
          width: 100%;
          margin-bottom: 40px;
        }

        .article-list {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .article-item, .article-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 8px;
          width: 300px;
          transition: 0.3s;
        }

        .article-card:hover, .article-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }

        .article-card h3, .article-item h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .article-card p, .article-item p {
          font-size: 1rem;
          margin-bottom: 10px;
        }

        .article-card a, .article-item a {
          color: #ffcc00;
          text-decoration: none;
          font-weight: bold;
        }

        .article-card a:hover, .article-item a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .article-list {
            flex-direction: column;
            align-items: center;
          }

          .article-item, .article-card {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default Insights;