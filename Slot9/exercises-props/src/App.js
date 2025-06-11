import React from "react";
import './App.css';
import Welcome from "./components/Welcome";
import UserProfile from "./components/UserProfile";
import NameList from "./components/Namelist";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./components/StudentCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: "/images/pic1.png" },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: "/images/pic2.png" },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: "/images/pic3.png" },
  ];
  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      {/* <Welcome name="fptdn@fe.edu.vn" /> */}
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
