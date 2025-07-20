import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../redux/courseSlice';
import { Row, Col, Alert } from 'react-bootstrap';
import CourseItem from '../components/CourseItem';
import CourseList from '../components/CourseList';

function Home() {
  const { loading, error } = useSelector(state => state.courses);
  const dispatch = useDispatch();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current && !loading) {
      console.log('Dispatching fetchCourses từ Home');
      dispatch(fetchCourses())
        .then(() => {
          hasFetched.current = true;
        })
        .catch(err => console.error('Fetch error from Home:', err));
    }
  }, [dispatch, loading]);

  if (loading && !hasFetched.current) return <div className="text-center py-5">Đang tải...</div>;
  if (error) return <Alert variant="danger" className="text-center">{error}. Vui lòng kiểm tra file courses.json.</Alert>;

  return (
    <div>
      <h2>Danh sách khóa học</h2>
      <CourseList />
    </div>
  );
}

export default Home;