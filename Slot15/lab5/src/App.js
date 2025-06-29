import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/HomePage";
import About from "./Components/AboutPage";
import News from "./Components/NewsPage";
import Quiz from "./Components/QuizPage";
import Contact from "./Components/ContactPage";
import { jsQuizz } from "./Components/data/Quiz_Data";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/quiz" element={<Quiz questions={jsQuizz.questions} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;