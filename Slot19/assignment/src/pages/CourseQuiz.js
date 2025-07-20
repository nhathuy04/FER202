import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Quiz from '../components/Quiz';

function CourseQuiz() {
  const { id } = useParams();
  const course = useSelector(state => state.courses.courses.find(c => c.id === id));

  if (!course) return <p>Không tìm thấy khóa học</p>;

  const questions = course.quiz || [
    { question: 'Câu hỏi mẫu?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' }
  ];

  return (
    <div>
      <h2>Quiz: {course.name}</h2>
      <Quiz questions={questions} />
    </div>
  );
}

export default CourseQuiz;