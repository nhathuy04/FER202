import { useState, useEffect } from "react"; // Thêm useEffect để theo dõi thay đổi
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector } from "react-redux";
import { Container, Card, Form, Button, Table, Row, Col } from "react-bootstrap";

const QuizPage = () => {
  const [agree, setAgree] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { history, questions } = useSelector((state) => state.quiz); // Lấy cả questions
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz/start");
  };

  const handleCaptchaVerification = (response) => {
    if (response) {
      setIsVerified(true);
    }
  };

  const handleCaptchaExpired = () => {
    setIsVerified(false);
  };

  const handleAgreeChange = () => {
    setAgree(!agree);
  };

  // Theo dõi số lượng câu hỏi để re-render khi thay đổi
  useEffect(() => {
    // Có thể thêm logic nếu cần, ví dụ: log để debug
    console.log("Số câu hỏi cập nhật:", questions.length);
  }, [questions]);

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Quiz JavaScript (Tổng: {questions.length} câu)</Card.Title>
              <p><strong>Tổng số câu hỏi:</strong> {questions.length}</p>
              <p><strong>Mô tả:</strong> Đây là Quiz về React và JavaScript.</p>
              <p><strong>Ghi chú:</strong> 10 điểm cho mỗi câu trả lời đúng</p>
              <p><strong>Tạo bởi:</strong> Nhật Huy</p>
              <Form>
                <Form.Group className="mb-3">
                  <ReCAPTCHA
                    sitekey="6LfgG4QpAAAAABneDgEzFb1y4X4BNwwOrJ2ZVBFQ"
                    onChange={handleCaptchaVerification}
                    onExpired={handleCaptchaExpired}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Tôi đồng ý và bắt đầu ngay"
                    checked={agree}
                    onChange={handleAgreeChange}
                    disabled={!isVerified}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  disabled={!agree || !isVerified}
                  onClick={handleStartQuiz}
                >
                  Bắt đầu Quiz
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Lịch sử Quiz</Card.Title>
              {history.length === 0 ? (
                <p className="text-center">Chưa thực hiện quiz nào</p>
              ) : (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tổng điểm</th>
                      <th>Trạng thái</th>
                      <th>Thời gian bắt đầu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((item, index) => {
                      const date = new Date(item.startTime);
                      const formattedDate = date
                        .toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })
                        .replace(/\//g, "-")
                        .replace(",", "");
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td className="fw-bold">{item.score}</td>
                          <td className={item.score >= 50 ? "text-success fw-bold" : "text-danger fw-bold"}>
                            {item.score >= 50 ? "Đạt" : "Không đạt"}
                          </td>
                          <td>{formattedDate}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;