import Image from "next/image";
import { Col, Container, Row, Card } from "react-bootstrap";

const Services = () => {
  return (
    <section className="services space-2 bg-secondary">
      <Container>
        <Row xs={1} md={2} className="g-4">

            <>
            
            <Col md={4}>
              <Card className="shadow-sm">
                <div className="card-img-top">
                  <Image
                    src="/5.jpg"
                    alt="Image Description"
                    layout="responsive"
                    objectFit="cover"
                    width={160}
                    height={100}
                    blurDataURL="/img-placeholder.svg" />
                </div>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
                <Card className="shadow-sm">
                  <div className="card-img-top">
                    <Image
                      src="/6.jpg"
                      alt="Image Description"
                      layout="responsive"
                      objectFit="cover"
                      width={160}
                      height={100}
                      blurDataURL="/img-placeholder.svg" />
                  </div>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            <Col md={4}>
                <Card className="shadow-sm">
                  <div className="card-img-top">
                    <Image
                      src="/7.jpg"
                      alt="Image Description"
                      layout="responsive"
                      objectFit="cover"
                      width={160}
                      height={100}
                      blurDataURL="/img-placeholder.svg" />
                  </div>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            <Col md={4}>
                <Card className="shadow-sm">
                  <div className="card-img-top">
                    <Image
                      src="/8.jpg"
                      alt="Image Description"
                      layout="responsive"
                      objectFit="cover"
                      width={160}
                      height={100}
                      blurDataURL="/img-placeholder.svg" />
                  </div>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            <Col md={4}>
                <Card className="shadow-sm">
                  <div className="card-img-top">
                    <Image
                      src="/9.jpg"
                      alt="Image Description"
                      layout="responsive"
                      objectFit="cover"
                      width={160}
                      height={100}
                      blurDataURL="/img-placeholder.svg" />
                  </div>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            <Col md={4}>
                <Card className="shadow-sm">
                  <div className="card-img-top">
                    <Image
                      src="/10.jpg"
                      alt="Image Description"
                      layout="responsive"
                      objectFit="cover"
                      width={160}
                      height={100}
                      blurDataURL="/img-placeholder.svg" />
                  </div>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              </>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
