import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage";
import About from "./Components/AboutPage";
import News from "./Components/NewsPage";
import QuizPage from "./Components/QuizPage";
import Contact from "./Components/ContactPage";
import QuizStartPage from "./Components/QuizStartPage";
import QuizReviewPage from "./Components/QuizReviewPage";
import AddQuestionPage from "./Components/AddQuestionPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/add" element={<AddQuestionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/quiz/start" element={<QuizStartPage />} />
        <Route path="/quiz/review" element={<QuizReviewPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;