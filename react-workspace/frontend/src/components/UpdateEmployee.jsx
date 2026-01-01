import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function UpdateEmployee() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [employees, setEmployees] = useState({
        name: "",
        doj: "",
        dept: {
            deptName: "",
            designation: ""
        }
    });

    const [errors, setErrors] = useState({
        name: "",
        doj: "",
        deptName: "",
        designation: ""
    });

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((res) => {
            let employeeData = res.data;

            if (employeeData.doj && employeeData.doj.includes("-")) {
                const parts = employeeData.doj.split("-"); 
                if (parts[0].length === 2 && parts[2].length === 4) {
                    const frontendDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
                    employeeData = { ...employeeData, doj: frontendDate };
                }
            }

            setEmployees(employeeData);
        }).catch(error => {
            console.log("Error fetching data:", error);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name" || name === "doj") {
            setEmployees({ ...employees, [name]: value });
        } else {
            setEmployees({ ...employees, dept: { ...employees.dept, [name]: value } });
        }
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!employees.name.trim()) { tempErrors.name = "Name is required"; isValid = false; }
        if (!employees.doj) { tempErrors.doj = "Date is required"; isValid = false; }
        if (!employees.dept.deptName.trim()) { tempErrors.deptName = "Dept Name is required"; isValid = false; }
        if (!employees.dept.designation.trim()) { tempErrors.designation = "Designation is required"; isValid = false; }

        setErrors(tempErrors);
        return isValid;
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        if (validate()) {
            const parts = employees.doj.split("-");
            const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`; 
            
            const employeeData = { ...employees, doj: formattedDate };

            EmployeeService.updateEmployee(id, employeeData).then(() => {
                navigate("/");
            }).catch(error => {
                console.log("Update failed:", error);
            });
        }
    };

    return (
        <div className="container main-content d-flex align-items-center justify-content-center mt-5" style={{ minHeight: "85vh" }}>
            <div className="card shadow-lg border-0 rounded-4" style={{ width: "100%", maxWidth: "450px" }}> 
                
                <div className="card-header bg-white border-0 pt-3 pb-0 text-center">
                    <h4 className="fw-bold text-primary">Update Employee</h4>
                </div>

                <div className="card-body p-4">
                    <form onSubmit={handleUpdate}>
                        
                        <div className="mb-2">
                            <label className="form-label fw-bold small mb-1">Full Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                value={employees.name}
                                onChange={handleChange}
                            />
                            {errors.name && <small className="text-danger fst-italic" style={{fontSize: "0.75rem"}}>{errors.name}</small>}
                        </div>

                        <div className="mb-2">
                            <label className="form-label fw-bold small mb-1">Date of Joining</label>
                            <input 
                                type="date" 
                                name="doj" 
                                className={`form-control ${errors.doj ? 'is-invalid' : ''}`}
                                value={employees.doj}
                                onChange={handleChange}
                            />
                            {errors.doj && <small className="text-danger fst-italic" style={{fontSize: "0.75rem"}}>{errors.doj}</small>}
                        </div>

                        <div className="mb-2">
                            <label className="form-label fw-bold small mb-1">Department</label>
                            <input 
                                type="text" 
                                name="deptName" 
                                className={`form-control ${errors.deptName ? 'is-invalid' : ''}`}
                                value={employees.dept.deptName}
                                onChange={handleChange}
                            />
                            {errors.deptName && <small className="text-danger fst-italic" style={{fontSize: "0.75rem"}}>{errors.deptName}</small>}
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold small mb-1">Designation</label>
                            <input 
                                type="text" 
                                name="designation" 
                                className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                                value={employees.dept.designation}
                                onChange={handleChange}
                            />
                            {errors.designation && <small className="text-danger fst-italic" style={{fontSize: "0.75rem"}}>{errors.designation}</small>}
                        </div>

                        <div className="d-flex justify-content-between">
                            <Link to="/" className="btn btn-outline-danger btn-sm px-5 rounded-pill">Cancel</Link>
                            <button type="submit" className="btn btn-outline-warning btn-sm px-5 rounded-pill">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployee;