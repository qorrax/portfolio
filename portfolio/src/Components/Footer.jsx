
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container>
        <Row>
          <Col md={4} className="mb-4 md:mb-0">
            <h4 className="text-xl mb-4">Company Name</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4} className="mb-4 md:mb-0">
            <h4 className="text-xl mb-4">Connect with Us</h4>
            <div className="flex">
              <a href="https://twitter.com" className="mr-4">
                <FaTwitter className="text-white hover:text-blue-400 transition duration-300" size={24} />
              </a>
              <a href="https://facebook.com" className="mr-4">
                <FaFacebook className="text-white hover:text-blue-600 transition duration-300" size={24} />
              </a>
              <a href="https://instagram.com">
                <FaInstagram className="text-white hover:text-pink-500 transition duration-300" size={24} />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <h4 className="text-xl mb-4">Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
               <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
