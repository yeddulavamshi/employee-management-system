import { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import EmployeeModal from './EmployeeModal';
function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [loading, setLoading] = useState(true);

    const [typeEffect] = useTypewriter({
        words: ["Details", "List", "Info"],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80
    })

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        setLoading(true);
        EmployeeService.getAllEmployees()
            .then(res => {
                setEmployees(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    };

    const deleteEmployee = (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            EmployeeService.deleteEmployee(id)
                .then(() => {
                    loadEmployees();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    const viewEmployee = (employeeId) => {
        const employee = employees.find(emp => emp.id === employeeId);
        if (employee) {
            setSelectedEmployee(employee);
        }
    };

    const closeModal = () => {
        setSelectedEmployee(null);
    };




    return (
        <div className='container main-content' style={{ marginTop: "80px" }}>

            <div className="text-center mb-4">
                <h2 className='fw-bold text-primary'>
                    Employee <span style={{ color: 'black' }}>{typeEffect}</span>
                    <span style={{ color: 'red' }}><Cursor /></span>
                </h2>
            </div>

            <div className='row mb-3'>
                <div className="col-md-12 text-end">
                    <Link to="/add-emp" className='btn btn-primary btn-lg fs-6 shadow-sm rounded-pill px-4'>
                        <i className="bi bi-person-plus-fill me-2"></i> Add New Employee
                    </Link>
                </div>
            </div>

            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className='table table-hover table-striped mb-0 text-center align-middle'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th className="py-3">ID</th>
                                    <th className="py-3">Name</th>
                                    <th className="py-3">Date of Joining</th>
                                    <th className="py-3">Department</th>
                                    <th className="py-3">Designation</th>
                                    <th className="py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="6" className="text-center py-5">
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </td>
                                    </tr>
                                ) : employees.length > 0 ? (
                                    employees.map(employee => (
                                        <tr key={employee.id}>
                                            <td className="fw-bold text-muted">#{employee.id}</td>
                                            <td className="fw-bold">{employee.name}</td>
                                            <td>{employee.doj}</td>
                                            <td>
                                                <span className="badge bg-info text-dark">{employee.dept?.deptName}</span>
                                            </td>
                                            <td>{employee.dept?.designation}</td>

                                            <td>
                                                <div className="d-flex justify-content-center gap-2">

                                                    <button
                                                        className='btn btn-info btn-sm text-white shadow-sm'
                                                        title="View Details"
                                                        style={{ minWidth: "40px" }}
                                                        onClick={() => viewEmployee(employee.id)}
                                                    >
                                                        <i className="bi bi-eye-fill"></i>
                                                    </button>

                                                    <Link
                                                        to={`update-emp/${employee.id}`}
                                                        className='btn btn-primary btn-sm shadow-sm'
                                                        title="Edit Employee"
                                                        style={{ minWidth: "40px" }}
                                                    >
                                                        <i className="bi bi-pencil-square"></i>
                                                    </Link>

                                                    <button
                                                        className='btn btn-danger btn-sm shadow-sm'
                                                        title="Delete Employee"
                                                        style={{ minWidth: "40px" }}
                                                        onClick={() => deleteEmployee(employee.id)}
                                                    >
                                                        <i className="bi bi-trash-fill"></i>
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4 text-muted">
                                            No employees found. Add your First Employee.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <EmployeeModal
                employee={selectedEmployee}
                closeModal={closeModal}
            />
        </div>
    )
}
export default EmployeeList; 