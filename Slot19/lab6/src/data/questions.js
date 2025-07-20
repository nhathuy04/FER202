// src/data/questions.js
export const initialQuestions = [
    {
      question: "Which of the following is a basic hook in React?",
      choices: ["useReducer()", "useMemo()", "useCallback()", "useContext()"],
      type: "MCQs",
      correctAnswer: "useContext()",
    },
    {
      question: "What is the purpose of ReactJS?",
      choices: [
        "Server-side rendering",
        "Building user interfaces",
        "Database management",
        "File handling",
      ],
      type: "MCQs",
      correctAnswer: "Building user interfaces",
    },
    {
      question: "Which lifecycle method is used in class components for component mounting?",
      choices: ["componentDidMount", "useEffect", "componentWillMount", "render"],
      type: "MCQs",
      correctAnswer: "componentDidMount",
    },
    {
      question: "What does JSX stand for?",
      choices: [
        "JavaScript XML",
        "JavaScript Extension",
        "JavaScript Xtra",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "JavaScript XML",
    },
    {
      question: "Which function is used to update state in functional components?",
      choices: ["setState", "updateState", "changeState", "useState"],
      type: "MCQs",
      correctAnswer: "useState",
    },
    {
      question: "What is the default port for a React development server?",
      choices: ["3000", "8080", "5000", "80"],
      type: "MCQs",
      correctAnswer: "3000",
    },
    {
      question: "Which of these is a valid React component name?",
      choices: ["my-component", "MyComponent", "mycomponent", "MYCOMPONENT"],
      type: "MCQs",
      correctAnswer: "MyComponent",
    },
    {
      question: "What is the purpose of the `key` prop in React lists?",
      choices: [
        "To style the list",
        "To uniquely identify list items",
        "To define the list order",
        "To hide list items",
      ],
      type: "MCQs",
      correctAnswer: "To uniquely identify list items",
    },
    {
      question: "Which method is used to prevent a component from re-rendering in React?",
      choices: ["useMemo", "shouldComponentUpdate", "useCallback", "preventRender"],
      type: "MCQs",
      correctAnswer: "shouldComponentUpdate",
    },
    {
      question: "What is the output of `console.log(typeof [])` in JavaScript?",
      choices: ["array", "object", "list", "undefined"],
      type: "MCQs",
      correctAnswer: "object",
    },
  ];