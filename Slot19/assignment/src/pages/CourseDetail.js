import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Row, Col, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteCourse } from '../redux/courseSlice';
import './CourseDetail.css';

function CourseDetail() {
  const { id } = useParams();
  const course = useSelector(state => state.courses.courses.find(c => c.id === id));
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  if (!course) return <div className="text-center py-3">Không tìm thấy khóa học</div>;

  const courseImageSrc = `/${course.image}`;
  const instructorImageSrc = `/${course.instructorImage}`;

  const courseContent = course.content || ['Nội dung chưa được cập nhật'];

  // Đánh giá giả lập
  const reviews = [
    { user: 'Học viên A', comment: 'Khóa học rất hữu ích!', rating: 4.5 },
    { user: 'Học viên B', comment: 'Giảng viên giảng dạy dễ hiểu.', rating: 4.0 },
  ];

  return (
    <div className="course-detail-container">
      <h2 className="mb-2 text-primary fw-bold">Chi tiết khóa học</h2>
      <Card className="shadow-lg border-0 rounded-3">
        <Row className="g-2 align-items-stretch">
          <Col md={4}>
            <Card.Img
              variant="top"
              src={courseImageSrc}
              alt={course.name}
              className="rounded-3"
              style={{ objectFit: 'cover', height: '400px', border: '1px solid #dee2e6' }}
            />
            <Card className="mt-2 bg-white border-primary rounded-3 p-2 text-center shadow-sm" style={{ borderWidth: '1px' }}>
              <h2>Giảng Viên</h2>
              <Image
                src={instructorImageSrc}
                alt={`${course.instructor || 'Unknown'} - Giảng viên`}
                className="rounded-circle mb-1 mx-auto d-block"
                style={{ width: '150px', height: '150px', border: '2px solid #007bff' }}
                fluid
              />
              <Card.Text className="fw-bold text-dark mb-0" style={{ fontSize: '1.1rem' }}>
                {course.instructor || 'Chưa có'}
              </Card.Text>
            </Card>
          </Col>
          <Col md={8}>
            <Card.Body className="d-flex flex-column h-100 p-2">
              <Card.Title className="fs-1 fw-bold text-dark mb-2">{course.name}</Card.Title>
              <div className="mb-2 d-flex gap-1">
                <span className="badge bg-primary p-1">Số câu hỏi: {course.quiz.length}</span>
              </div>
              <div className="mb-2">
                <span className="text-warning fs-5">★ {course.rating || 4.2} / 5</span> (dựa trên đánh giá)
              </div>
              <Card.Text className="text-muted lead mb-2" style={{ fontSize: '1rem', lineHeight: '1.4' }}>
                {course.description}
              </Card.Text>
              {/* Nội dung khóa học */}
              <Card className="mb-2 border-0 shadow-sm">
                <Card.Header className="bg-light text-primary fw-bold">Nội dung khóa học</Card.Header>
                <ListGroup variant="flush">
                  {courseContent.map((item, index) => (
                    <ListGroup.Item key={index} className="p-1">{item}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
              {/* Đánh giá */}
              <Card className="mb-2 border-0 shadow-sm">
                <Card.Header className="bg-light text-primary fw-bold">Đánh giá</Card.Header>
                <ListGroup variant="flush">
                  {reviews.map((review, index) => (
                    <ListGroup.Item key={index} className="p-1">
                      <span className="fw-bold">{review.user}</span>: {review.comment} <span className="text-warning">★ {review.rating}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
              <div className="mt-2">
                <Button as={Link} to={`/quiz/${id}`} variant="primary" className="me-2 px-3 py-1">
                  Làm Quiz
                </Button>
                {user?.role === 'admin' && (
                  <>
                    <Button as={Link} to={`/edit-course/${id}`} variant="warning" className="me-2 px-3 py-1">
                      Sửa
                    </Button>
                    <Button
                      variant="danger"
                      className="px-3 py-1"
                      onClick={() => {
                        if (window.confirm('Bạn có chắc muốn xóa khóa học này?')) {
                          dispatch(deleteCourse(course.id));
                        }
                      }}
                    >
                      Xóa
                    </Button>
                  </>
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CourseDetail;