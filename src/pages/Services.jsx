import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Services() {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1>Our Services</h1>
          <p>
            At eCom-Shop, we offer a wide range of services to meet all your needs. From fast and reliable shipping to exceptional customer support, we are dedicated to providing you with the best shopping experience.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4}>
          <h2>Fast Shipping</h2>
          <p>
            We understand the importance of timely delivery. That's why we offer fast and reliable shipping options to get your products to you as quickly as possible. Our logistics partners are top-notch, ensuring your orders are processed and shipped promptly.
          </p>
        </Col>
        <Col md={8}>
          <img
            src="https://unblast.com/wp-content/uploads/2020/10/Fast-Shipping-Illustration.jpg"
            alt="Fast Shipping"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={8}>
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718409600&semt=ais_user"
            alt="Customer Support"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={4}>
          <h2>Exceptional Customer Support</h2>
          <p>
            Our customer support team is here to help you with any questions or issues you may have. We are committed to providing you with the best service possible. You can reach us via email, phone, or live chat, and we'll be happy to assist you.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4}>
          <h2>Easy Returns</h2>
          <p>
            We want you to be completely satisfied with your purchase. If you are not, we offer easy and hassle-free returns so you can shop with confidence. Simply follow our return policy guidelines, and we'll handle the rest.
          </p>
        </Col>
        <Col md={8}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/wwrr/returns-landing-page/returns-hero-mobile-new.png"
            alt="Easy Returns"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={8}>
          <img
            src="https://shiftasia.com/wp-content/uploads/2023/01/quality-assurance-software-development.jpg"
            alt="Quality Assurance"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={4}>
          <h2>Quality Assurance</h2>
          <p>
            We stand behind the quality of our products. Each item is carefully inspected and tested to ensure it meets our high standards. We believe in providing only the best for our customers.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4}>
          <h2>Personalized Shopping Experience</h2>
          <p>
            We offer a personalized shopping experience to help you find exactly what you're looking for. Our website features tailored recommendations based on your preferences and browsing history.
          </p>
        </Col>
        <Col md={8}>
          <img
            src="https://i0.wp.com/blog.contactpigeon.com/wp-content/uploads/2021/09/Best-Personalized-Shopping-Experience-in-Retail_1300X644-01.jpg?fit=1300%2C644&ssl=1"
            alt="Personalized Shopping Experience"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Additional Services</h2>
          <ul>
            <li>Gift Wrapping Services</li>
            <li>Membership Rewards Program</li>
            <li>Exclusive Discounts and Offers</li>
            <li>24/7 Customer Support</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
