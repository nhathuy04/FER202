import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { deleteCourse, fetchCourses } from '../redux/courseSlice';
import { fetchQuestions, deleteQuestion, updateQuestion } from '../redux/quizSlice';
import Swal from 'sweetalert2';
import EditQuestionForm from '../components/EditQuestionModal';

function AdminDashboard() {
  const { courses, status: coursesStatus, error: coursesError } = useSelector(state => state.courses);
  const { questions, status: quizStatus, error: quizError } = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  const hasFetchedCourses = useRef(false);
  const hasFetchedQuestions = useRef(false); // Thêm ref để kiểm soát fetch questions
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editQuestionIndex, setEditQuestionIndex] = useState(null);
  const [questionToEdit, setQuestionToEdit] = useState(null);

  useEffect(() => {
    if (!hasFetchedCourses.current && courses.length === 0 && coursesStatus !== 'loading') {
      console.log('Dispatching fetchCourses từ AdminDashboard');
      dispatch(fetchCourses())
        .then(() => {
          hasFetchedCourses.current = true;
          if (courses.length > 0) {
            setSelectedCourseId(courses[0].id);
            dispatch(fetchQuestions(courses[0].id));
          }
        })
        .catch(err => console.error('Fetch courses error from AdminDashboard:', err));
    }
  }, [dispatch, courses.length, coursesStatus]);

  useEffect(() => {
    if (selectedCourseId && !hasFetchedQuestions.current && quizStatus !== 'loading') {
      console.log('Fetching questions for courseId:', selectedCourseId);
      dispatch(fetchQuestions(selectedCourseId))
        .then(() => {
          console.log('Questions fetched:', questions);
          hasFetchedQuestions.current = true; // Đặt flag sau khi fetch thành công
        })
        .catch(err => console.error('Fetch questions error:', err));
    }
  }, [dispatch, selectedCourseId, quizStatus]);

  // Reset flag khi selectedCourseId thay đổi để fetch lại
  useEffect(() => {
    if (selectedCourseId) {
      hasFetchedQuestions.current = false; // Reset flag để fetch lại khi đổi course
    }
  }, [selectedCourseId]);

  const handleDeleteCourse = (courseId) => {
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
        dispatch(deleteCourse(courseId));
        Swal.fire('Đã xóa!', 'Khóa học đã được xóa thành công.', 'success');
      }
    });
  };

  const handleDeleteQuestion = (courseId, questionIndex) => {
    Swal.fire({
      title: 'Bạn có chắc không?',
      text: 'Hành động này sẽ xóa câu hỏi và không thể khôi phục!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Vâng, xóa!',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteQuestion({ courseId, questionIndex }))
          .unwrap()
          .then(() => {
            Swal.fire('Đã xóa!', 'Câu hỏi đã được xóa thành công.', 'success');
          })
          .catch((err) => {
            Swal.fire('Lỗi!', 'Không thể xóa câu hỏi.', 'error');
            console.error('Delete question error:', err);
          });
      }
    });
  };

  const handleSaveQuestion = (courseId, questionIndex, updatedQuestion) => {
    dispatch(updateQuestion({ courseId, questionIndex, updatedQuestion }))
      .unwrap()
      .then(() => {
        Swal.fire('Đã cập nhật!', 'Câu hỏi đã được cập nhật thành công.', 'success');
        dispatch(fetchQuestions(courseId)); // Fetch lại để đồng bộ
        hasFetchedQuestions.current = false; // Reset flag để fetch lại
      })
      .catch((err) => {
        Swal.fire('Lỗi!', 'Không thể cập nhật câu hỏi.', 'error');
        console.error('Update question error:', err);
      });
  };

  const handleEditQuestion = (courseId, questionIndex, question) => {
    console.log('Attempting to edit question at index:', questionIndex, 'Question:', question, 'Questions:', questions);
    if (questions && questions.length > questionIndex && question && question.question) {
      setSelectedCourseId(courseId);
      setEditQuestionIndex(questionIndex);
      setQuestionToEdit(question);
      setShowEditModal(true);
    } else {
      console.error('Invalid question data or index:', { questionIndex, questions });
      Swal.fire('Lỗi!', 'Dữ liệu câu hỏi không hợp lệ hoặc không tồn tại.', 'error');
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditQuestionIndex(null);
    setQuestionToEdit(null);
  };

  const handleCourseChange = (courseId) => {
    console.log('Changing to courseId:', courseId);
    setSelectedCourseId(courseId);
    hasFetchedQuestions.current = false; // Reset flag để fetch lại khi đổi course
  };

  if (coursesStatus === 'loading' || quizStatus === 'loading') return <div>Loading...</div>;
  if (coursesStatus === 'failed' || quizStatus === 'failed') return <div>Error: {coursesError || quizError}</div>;

  return (
    <div>
      <h2>Quản lý khóa học</h2>
      <Link to="/add-course">
        <Button variant="success" className="mb-3">Thêm khóa học</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Số câu hỏi</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.quiz ? course.quiz.length : 0}</td>
              <td>
                <Button variant="secondary" onClick={() => handleCourseChange(course.id)} className="me-2">
                  Xem câu hỏi
                </Button>
                <Link to={`/edit-course/${course.id}`}>
                  <Button variant="warning" className="me-2">Sửa</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDeleteCourse(course.id)} className="me-2">Xóa</Button>
                <Link to={`/add-question/${course.id}`}>
                  <Button variant="info">Thêm câu hỏi</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedCourseId && (
        <>
          <h3>Danh sách câu hỏi cho khóa học: {courses.find(c => c.id === selectedCourseId)?.name}</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Câu hỏi</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {questions && questions.length > 0 ? (
                questions.map((question, index) => (
                  <tr key={index}>
                    <td>{question.question}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleEditQuestion(selectedCourseId, index, question)}
                        className="me-2"
                      >
                        Sửa
                      </Button>
                      <Button variant="danger" onClick={() => handleDeleteQuestion(selectedCourseId, index)}>
                        Xóa
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">Không có câu hỏi để hiển thị.</td>
                </tr>
              )}
            </tbody>
          </Table>
          <EditQuestionForm
            show={showEditModal}
            onHide={handleCloseEditModal}
            courseId={selectedCourseId}
            questionIndex={editQuestionIndex}
            questionToEdit={questionToEdit}
            onSave={handleSaveQuestion}
          />
        </>
      )}
    </div>
  );
}

export default AdminDashboard;