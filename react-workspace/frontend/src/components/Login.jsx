import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService"; 

function Login() {
    
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        if (error) setError(""); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        AuthService.login(user)
            .then(res => {
                console.log("Login Success:", res.data);
                
                const token = res.data.token || "dummy-token";
                AuthService.saveUserLogin(token);

                setLoading(false);

                navigate("/");
            })
            .catch(err => {
                console.log("Login Failed:", err);
                
                setLoading(false);
                
                setError("Invalid username or password. Please try again.");
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-header bg-white border-0 pt-4 text-center">
                            <h3 className="fw-bold text-primary">Welcome Back</h3>
                            <p className="text-muted small">Please login to your account</p>
                        </div>
                        
                        <div className="card-body p-4">
                            
                            {error && (
                                <div className="alert alert-danger text-center p-2 small">
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold small">Username</label>
                                    <input 
                                        type="text" 
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter username"
                                        value={user.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold small">Password</label>
                                    <input 
                                        type="password" 
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn btn-primary w-100 rounded-pill shadow-sm fw-bold"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Logging in...
                                        </span>
                                    ) : (
                                        "Login"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;