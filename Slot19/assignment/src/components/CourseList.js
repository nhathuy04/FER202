import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../redux/courseSlice';
import { Row, Col, Alert } from 'react-bootstrap';
import CourseItem from '../components/CourseItem';

function CourseList() {
  const { courses, loading, error, searchQuery } = useSelector(state => state.courses);
  const dispatch = useDispatch();
  const hasFetched = useRef(false); // Theo dõi lần fetch đầu tiên

  useEffect(() => {
    if (!hasFetched.current && !loading && courses.length === 0) {
      console.log('Dispatching fetchCourses vì courses rỗng');
      dispatch(fetchCourses())
        .then(() => {
          console.log('Fetch hoàn thành, đánh dấu hasFetched');
          hasFetched.current = true; // Đánh dấu đã fetch
        })
        .catch(err => {
          console.error('Fetch lỗi:', err);
        });
    }
  }, [dispatch, loading, courses.length]); // Chạy khi mount hoặc khi courses.length thay đổi

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading && !hasFetched.current) {
    console.log('Rendering với loading:', loading, 'hasFetched:', hasFetched.current);
    return <div className="text-center py-5">Đang tải...</div>;
  }
  if (error) return <Alert variant="danger" className="text-center">{error}. Vui lòng kiểm tra file courses.json trong public/data/.</Alert>;

  return (
    <Row className="g-4">
      {filteredCourses.length > 0 ? (
        filteredCourses.map(course => (
          <Col md={4} key={course.id}>
            <CourseItem course={course} />
          </Col>
        ))
      ) : (
        <Alert variant="info" className="text-center">
          {searchQuery ? 'Không tìm thấy khóa học nào.' : 'Chưa có khóa học nào. Vui lòng thêm khóa học mới.'}
        </Alert>
      )}
    </Row>
  );
}

export default CourseList;