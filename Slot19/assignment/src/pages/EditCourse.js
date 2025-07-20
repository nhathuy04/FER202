import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import CourseForm from '../components/CourseForm';
import { updateCourse } from '../redux/courseSlice';

function EditCourse() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const course = useSelector(state => state.courses.courses.find(c => c.id === id));

  const handleSubmit = (formData) => {
    dispatch(updateCourse({ ...formData, id }));
    navigate(`/course/${id}`);
  };

  return (
    <div>
      <h2>Sửa khóa học</h2>
      {course ? <CourseForm initialValues={course} onSubmit={handleSubmit} /> : <p>Không tìm thấy khóa học</p>}
    </div>
  );
}

export default EditCourse;