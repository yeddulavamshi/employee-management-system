import './App.css';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UpdateEmployee from './components/UpdateEmployee';
import Login from './components/Login';


function PrivateRoute({ children }) {
    return localStorage.getItem("logged") ? children : <Navigate to="/login" />;
}

function App() {

    return (
            <BrowserRouter>
                <Header />
                <div className="container main-content mt-5">
                <Routes>
                    <Route exact path="/login" element={<Login />} />

                    <Route path="/" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
                    <Route path="/add-emp" element={<PrivateRoute><CreateEmployee /></PrivateRoute>} />
                    <Route path="/update-emp/:id" element={<PrivateRoute><UpdateEmployee /></PrivateRoute>} />
                </Routes>
                </div>
                <Footer />
            </BrowserRouter>
    )
}
export default App;