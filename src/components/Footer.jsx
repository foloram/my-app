import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#677889ff",

        marginTop: "50px",
      }}
    >
      <Container className="py-4">
        <Row>
          <Col md={4}>
            <h5>MY APP</h5>
            <p>
              Our mission is to provide modern and reliable home products that
              enhance your lifestyle with quality and elegance.
            </p>
          </Col>

          <Col md={4}>
            <h6>Contact</h6>
            <p>Email: test@mail.com</p>
            <p>Phone: 123456789</p>
          </Col>
        </Row>

        <hr style={{ borderColor: "gray" }} />

        <p className="text-center mb-0">© 2026 MY APP - All Rights Reserved</p>
      </Container>
    </footer>
  );
}
