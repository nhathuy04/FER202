import { Container, Row, Col, Card } from "react-bootstrap";
import { newLists } from "./data/News_Data";
import "../assets/NewsPage.css";

const NewsPage = () => {
  return (
    <Container className="news-page-container py-4">
      <h2 className="text-center text-danger mb-4">News Category</h2>
      <Row className="g-4">
        {newLists.map((newsItem) => (
          <Col key={newsItem.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="news-card h-100">
              <Card.Img
                variant="top"
                src={newsItem.images}
                alt={newsItem.title}
                className="news-image"
              />
              <Card.Body>
                <Card.Title className="news-title">
                  {newsItem.title}
                </Card.Title>
                <Card.Text className="news-description">
                  {newsItem.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsPage;
