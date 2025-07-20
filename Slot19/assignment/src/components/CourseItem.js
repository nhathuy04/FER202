import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse } from '../redux/courseSlice';
import Swal from 'sweetalert2';

function CourseItem({ course }) {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuizClick = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/quiz/${course.id}` } });
    } else {
      navigate(`/quiz/${course.id}`);
    }
  };

  const handleDeleteCourse = () => {
    Swal.fire({
      title: 'Bạn có chắc không?',
      text: 'Hành động này sẽ xóa khóa học và không thể khôi phục!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Vâng, xóa!',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCourse(course.id)); // Dispatch mà không dùng .then
        Swal.fire('Đã xóa!', 'Khóa học đã được xóa thành công.', 'success');
      }
    });
  };

  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={course.image}
        alt={course.name}
        className="rounded-3"
        style={{ objectFit: 'contain', maxHeight: '300px', width: '100%' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-5 fw-bold mb-2">{course.name}</Card.Title>
        <Card.Text className="flex-grow-1 text-muted" style={{ minHeight: '60px' }}>
          {course.description.length > 100 ? `${course.description.substring(0, 100)}...` : course.description}
        </Card.Text>
        <div className="mt-auto">
          <Button as={Link} to={`/course/${course.id}`} variant="primary" className="me-2">Chi tiết</Button>
          <Button variant="info" className="me-2" onClick={handleQuizClick}>Quiz</Button>
          {isAuthenticated && user?.role === 'admin' && (
            <>
              <Button as={Link} to={`/edit-course/${course.id}`} variant="warning" className="me-2">Sửa</Button>
              <Button variant="danger" onClick={handleDeleteCourse}>Xóa</Button>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CourseItem;