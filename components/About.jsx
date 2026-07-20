import "./About.css";

function About() {
  return (
    <section className="about">

      <h2>About Elite Motors</h2>

      <p>
        Elite Motors is a premium car showroom offering luxury,
        sports, and family cars at competitive prices.
      </p>

      <div className="about-box">

        <div>
          <h3>🚗 Quality Cars</h3>
          <p>Only certified premium vehicles.</p>
        </div>

        <div>
          <h3>💰 Best Price</h3>
          <p>Affordable pricing with finance options.</p>
        </div>

        <div>
          <h3>🤝 Trusted Service</h3>
          <p>Excellent customer support and after-sales service.</p>
        </div>

      </div>

    </section>
  );
}

export default About;