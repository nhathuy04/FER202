import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


const students = [
    {
        id: 'DE160182',
        name: 'Nguyễn Hữu Quốc Khánh',
        location: 'DaNang',
        img: '/a1.jpg',
    },
    {
        id: 'DE160377',
        name: 'Choy Vinh Thiên',
        location: 'QuangNam',
        img: '/a2.jpg',
    },
    {
        id: 'DE160547',
        name: 'Đỗ Nguyễn Phúc',
        location: 'QuangNam',
        img: '/a3.jpg',
    },
    {
        id: 'DE170049',
        name: 'Lê Hoàng Minh',
        location: 'DaNang',
        img: '/a4.jpg',
    },
];

const StudentCard = ({ student, onStatusChange }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="col-md-6 col-lg-6 mb-4">
            <div className="card shadow-sm border-0" style={{ width: "500px" }}>
                <img
                    src={student.img}
                    className="card-img-top img-fluid"
                    alt={student.name}
                    style={{ height: '500px', objectFit: 'cover', width: "500px" }}
                />
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title" style={{ fontSize: '2rem', fontWeight: 'normal', marginBottom: '0' }}>
                        {student.id}
                    </h5>
                    <div className="w-100 mt-3">
                        <div className="d-flex justify-content-between w-100">
                            <h6 className="card-subtitle" style={{ fontSize: '1.2rem', fontWeight: 'normal' }}>
                                {student.name}
                            </h6>
                            <span className="card-text" style={{ fontSize: '1.2rem' }}>
                                {student.location}
                            </span>
                        </div>
                        <div className="d-flex justify-content-center mt-2" style={{ width: 'fit-content', gap: '150px', margin: '0 auto' }}>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`attendance-${student.id}`}
                                    id={`absent-${student.id}`}
                                    checked={student.status === 'Absent'}
                                    onChange={() => onStatusChange(student.id, 'Absent')}
                                />
                                <label className="form-check-label" htmlFor={`absent-${student.id}`}>
                                    Absent
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`attendance-${student.id}`}
                                    id={`present-${student.id}`}
                                    checked={student.status === 'Present'}
                                    onChange={() => onStatusChange(student.id, 'Present')}
                                />
                                <label className="form-check-label" htmlFor={`present-${student.id}`}>
                                    Present
                                </label>
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <form onSubmit={handleSubmit}>
                                <button
                                    type="submit"
                                    className="btn btn-warning"
                                    style={{ backgroundColor: '#F38F31', padding: '5px 10px', color: "white" }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#EACDAD' }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        src="/Logo.png"
                        alt="FPT University"
                        className="img-fluid"
                        style={{ width: '150px', height: '50px' }}
                    />
                </a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <span className="nav-item mx-2">🏠</span>
                        <a className="nav-link" href="#" style={{ color: '#F16F27' }}>Trang chủ</a>
                        <span className="nav-item mx-2" >ℹ️</span>
                        <a className="nav-link" href="#" style={{ color: '#F16F27' }}>Ngành học</a>
                        <span className="nav-item mx-2" >🪪</span>
                        <a className="nav-link" href="#" style={{ color: '#F16F27' }}>Tuyển sinh</a>
                        <span className="nav-item mx-2">📃</span>
                        <a className="nav-link" href="#" style={{ color: '#F16F27' }}>Sinh viên</a>
                    </div>
                </div>
                <form className="d-flex ms-auto">
                    <label htmlFor="search-input" className="me-2">Search</label>
                    <input
                        type="text"
                        className="form-control"
                        id="search-input"
                        aria-label="Search"
                        style={{ width: '200px' }}
                    />
                </form>
            </div>
        </nav>
    </header>
);

const Banner = () => (
    <div style={{ backgroundColor: "#ff6200", padding: "20px 0", textAlign: "center" }}>
        <div className="container p-0">
            <img
                src="/a5.jpg"
                alt="Banner Image"
                style={{
                    border: "5px solid #fff",
                    width: "1000px", // Chiều rộng cố định giống hình ảnh
                    height: "auto", // Giữ tỷ lệ gốc
                    display: "inline-block", // Căn giữa
                }}
            />
        </div>
    </div>
);

const Footer = () => (
    <footer
        className="py-4"
        style={{
            backgroundColor: '#ff8533',
        }}
    >
        <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row text-dark">
            <div>
                <h6 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Our Address
                </h6>
                <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}>
                    11, Hà Huy Tập Đà Nẵng
                </p>
                <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}>
                    📞 +84023111111
                </p>
                <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}>
                    ☎️ +852 8765 4321
                </p>
                <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}>
                    ✉️{' '}
                    <a
                        href="#"
                        style={{
                            color: '#0000EE',
                            textDecoration: 'underline',
                        }}
                    >
                        fptudn@fpt.edu.vn
                    </a>
                </p>
            </div>
            <div className="d-flex gap-2 mt-3 mt-md-0">
                <a href="#" className="text-white fs-5">
                    G+
                </a>
                <a href="#" className="text-white fs-5">
                    f
                </a>
                <a href="#" className="text-white fs-5">
                    in
                </a>
                <a href="#" className="text-white fs-5">
                    🐦
                </a>
                <a href="#" className="text-white fs-5">
                    📺
                </a>
                <a href="#" className="text-white fs-5">
                    ✉
                </a>
            </div>
        </div>
        <div className="text-center mt-3 text-dark" style={{ fontSize: '0.9rem' }}>
            © Copyright 2023
        </div>
    </footer>
);

const Exercise5 = () => {
    const [studentList, setStudentList] = useState(
        students.map((student) => ({ ...student, status: 'Absent' }))
    );

    const handleStatusChange = (id, newStatus) => {
        setStudentList((prevList) =>
            prevList.map((student) =>
                student.id === id ? { ...student, status: newStatus } : student
            )
        );
    };

    return (
        <div>
            <Header />
            <Banner />
            <div className="container">
                <nav
                    aria-label="breadcrumb"
                    style={{
                        marginTop:"10px",
                        backgroundColor: "#E8ECEF",
                        padding: "5px",
                        textAlign: "center",
                        marginRight:"89%",
                    }}
                >
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#" style={{color:"orange",textDecoration:"none"}}>
                                Home
                            </a>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            Students
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="container mt-4">
                <div className="text-center mb-4">
                    <h2>Students Detail</h2>
                </div>
                <div className="row">
                    {studentList.map((student) => (
                        <StudentCard
                            key={student.id}
                            student={student}
                            onStatusChange={handleStatusChange}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Exercise5;