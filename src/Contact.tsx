import React from "react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <>
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you! Let us know how we can be of service to you.</p>
        </div>

        {/* Form + Image Section */}
        <div className="form-image-section">
          {/* Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your Name" required />

              <label htmlFor="email">Company Email</label>
              <input id="email" type="email" placeholder="your@email.com" required />

              <label htmlFor="jobTitle">Job Title</label>
              <input id="jobTitle" type="text" placeholder="e.g. Software Engineer" required />

              <label htmlFor="phone">Contact Number</label>
              <input id="phone" type="tel" placeholder="+123 456 7890" required />

              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Subject of your message" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows={5} required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Image beside form */}
          <div className="connect-image">
  <img src="/contactme.png" alt="Connect With Us" />
  <div className="image-caption">Make an enquiry to Neuviq Solutions and we'll get back to you as soon as possible.</div>
</div>
        </div>

        {/* Contact Info */}
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@neuviqsolutions.com</p>
          <p><strong>Phone:</strong> +27 659834925</p>
          <p><strong>Location:</strong> 443 Leyds Street, Innovation City</p>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://linkedin.com/company/neuviq" target="_blank" rel="noopener noreferrer" className="icon">🔗 LinkedIn</a>
            <a href="https://twitter.com/neuviq" target="_blank" rel="noopener noreferrer" className="icon">🐦 Twitter</a>
            <a href="https://facebook.com/neuviq" target="_blank" rel="noopener noreferrer" className="icon">📘 Facebook</a>
          </div>
        </div>

        {/* Map */}
        <div className="contact-map">
          <iframe
            title="Neuviq Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <style>
        {`
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}

.contact-container {
  width: 100vw;
  min-height: 100vh;
  background: url("/contact.png") no-repeat center center/cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  padding: 80px 20px;
  box-sizing: border-box;
}

.contact-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.contact-header p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.form-image-section {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 40px;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 50px;
}

/* Form Styles */
.contact-form {
  background: rgba(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  flex: 1;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.contact-form label {
  margin: 10px 0 5px;
  font-weight: bold;
}

.contact-form input, .contact-form textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
}

.contact-form button {
  background-color: #e01067;
  padding: 12px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 40px;
  width: 150px;
  align-self: center;
}

.contact-form button:hover {
  background-color: #ffaa00;
}

/* Image with Text Overlay */
.connect-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  flex: 1;
  max-width: 450px;
}

.connect-image img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.image-caption {
  margin-top: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
}

/* Contact Info */
.contact-details {
  width: 45%;
  min-width: 300px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.contact-details:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.02);
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.icon {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

/* Map */
.contact-map iframe {
  width: 100%;
  max-width: 1000px;
  height: 300px;
  border: none;
  margin-top: 30px;
  border-radius: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-header h1 {
    font-size: 2rem;
  }

  .contact-header p {
    font-size: 1rem;
  }

  .form-image-section {
    flex-direction: column;
    align-items: center;
  }

  .contact-form, .connect-image {
    width: 100%;
  }

  .overlay-text {
    font-size: 1.5rem;
  }
}
        `}
      </style>
    </>
  );
};

export default Contact;