import { useDispatch } from 'react-redux';
  import { useNavigate } from 'react-router-dom';
  import CourseForm from '../components/CourseForm';
  import { addCourse, fetchCourses } from '../redux/courseSlice';
  import Swal from 'sweetalert2';

  function AddCourse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (formData) => {
      dispatch(addCourse(formData));
      dispatch(fetchCourses()); // Tải lại danh sách để đồng bộ
      Swal.fire({
        title: 'Thêm khóa học thành công!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        navigate('/');
      });
    };

    return (
      <div>
        <h2>Thêm khóa học</h2>
        <CourseForm onSubmit={handleSubmit} />
      </div>
    );
  }

  export default AddCourse;