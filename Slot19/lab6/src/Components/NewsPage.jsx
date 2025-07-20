import { Container, Card, Row, Col } from "react-bootstrap";
import { newLists } from "./data/News_Data.jsx";

const NewsPage = () => {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Danh mục Tin tức</h2>
      <Row className="g-4" style={{ alignItems: "stretch" }}>
        {newLists.map((newsItem) => (
          <Col xs={12} md={4} className="mb-4" key={newsItem.id}>
            <Card className="h-100 d-flex flex-column">
              <Card.Img variant="top" src={newsItem.images} alt={newsItem.title} className="rounded" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{newsItem.title}</Card.Title>
                  <Card.Text>{newsItem.description}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsPage;