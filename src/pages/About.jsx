import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1>About eCom-Shop</h1>
          <p>
            Welcome to eCom-Shop, your number one source for all things fashion and electronics. We're dedicated to giving you the very best of products, with a focus on quality, customer service, and uniqueness.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <h2>Our Story</h2>
          <p>
            Founded in 2020 by Jane Doe, eCom-Shop has come a long way from its beginnings in a home office in New York. When Jane first started out, her passion for eco-friendly fashion and high-quality electronics drove her to do tons of research, so that eCom-Shop can offer you the world's most advanced and eco-friendly products. We now serve customers all over the world, and are thrilled that we're able to turn our passion into our own website.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://www.shutterstock.com/image-photo/our-story-phrase-written-vintage-260nw-1573061656.jpg"
            alt="Our Story"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <img
            src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
            alt="Our Mission"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality products that meet our customers' needs and exceed their expectations. We strive to offer a seamless and enjoyable shopping experience, from browsing to checkout, and to foster long-lasting relationships with our customers.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>High-quality, carefully curated products</li>
            <li>Exceptional customer service</li>
            <li>Competitive pricing</li>
            <li>Fast and reliable shipping</li>
            <li>Easy returns and exchanges</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
