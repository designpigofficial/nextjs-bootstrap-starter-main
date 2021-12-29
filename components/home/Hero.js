import Link from "next/link";
import MyCube from '../../dev/cube/src/App'

import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="space-lg-3 space-2">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 style={{textAlign:'center'}}>
              We Have Been Building
              <br />
              Custom Homes In Colorado 
              <br />
              For Over 30 Years
            </h2>
            <blockquote className="py-4 text-center">
              Are you in the market for a new home? Looking for a
              <br />
              trustworthy/proffesional with years of experience 
              <br />
              building just those? You have come to the right place!
            </blockquote>
            <div style={{textAlign:'center'}}>
            <Link href="#!">
              <a className="btn btn-lg btn-primary px-4">Contact</a>
            </Link>
            <Link href="#!">
              <a className="btn btn-lg btn-outline-secondary px-4 ms-3">
                Read More
              </a>
            </Link>
            </div>
          </Col>


          <Col md={4} className="mt-md-0 offsetLeft-2 mt-4" id="app">

            <MyCube />

          </Col>



        </Row>
      </Container>
    </section>
  );
};

export default Hero;


/**
 * 
 *  <Col md={6} className="mt-md-0 mt-4" id="app">

      <MyCube />

    </Col>

 * 
 */