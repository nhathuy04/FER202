import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import AddCourse from './pages/AddCourse';
import EditCourse from './pages/EditCourse';
import CourseDetail from './pages/CourseDetail';
import QuizPage from './pages/QuizPage';
import QuizStartPage from './pages/QuizStartPage';
import QuizReviewPage from './pages/QuizReviewPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import AddQuestion from './pages/AddQuestion'; // Thêm component mới

function App() {
  return (
    <>
      <Header />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Home />} />
          <Route path="/add-course" element={<ProtectedRoute adminOnly><AddCourse /></ProtectedRoute>} />
          <Route path="/edit-course/:id" element={<ProtectedRoute adminOnly><EditCourse /></ProtectedRoute>} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/quiz/start/:id" element={<QuizStartPage />} />
          <Route path="/quiz/review/:id" element={<QuizReviewPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />
          <Route path="/add-question/:id" element={<ProtectedRoute adminOnly><AddQuestion /></ProtectedRoute>} /> {/* Thêm route mới */}
        </Routes>
      </Container>
    </>
  );
}

export default App;