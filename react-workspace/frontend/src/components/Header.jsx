import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
function Header() {

    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("logged");

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("logged");
        navigate("/login");
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm'>
            <div className='container'>
                <Link to="/" className='navbar-brand fw-bold fs-3'style={{ letterSpacing: "1px" }}>
                    <i className="bi bi-building me-2"></i>Bridge<span className='animated-soft' style={{ color: "#00d2ff" }}>Soft</span>
                </Link>

                {isLoggedIn && (
                    <button
                        className="btn btn-danger btn-sm px-4 rounded-pill"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                )}

            </div>
        </nav>
    )
}

export default Header;


/*



link kindha
            {
                localStorage.getItem("logged") && 
                <button className='btn btn-primary' onClick={handleLogout}>
                    Logout
                </button>
            }

            total nav bar
<nav className="navbar navbar-expand-lg fixed-top" style={{
            background: "rgba(255, 255, 255, 0.15)", 
            backdropFilter: "blur(15px)",    
            WebkitBackdropFilter: "blur(15px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
        }}>
            <div className="container">
                <a href="/" className="navbar-brand fw-bold text-white fs-3" style={{ letterSpacing: "1px" }}>
                    Bridge<span style={{ color: "#00d2ff" }}>Soft</span>
                </a>
                
                <div className="navbar-nav ms-auto">
                    <a className="nav-link text-white fw-bold fs-6 border rounded-4 opacity-75" href="/">Dashboard</a>
                </div>
            </div>
        </nav>*/