import React from 'react';
import './EmployeeModal.css';

const EmployeeModal = ({ employee, closeModal }) => {
    if (!employee) return null;

    return (
        <div className="modal-overlay mt-5" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-header">
                    <h5 className="modal-title">Employee Profile</h5>
                    <button 
                        onClick={closeModal} 
                        style={{background:'transparent', border:'none', color:'white', fontSize:'1.5rem', cursor:'pointer'}}
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <div className="modal-body">
                    
                    <div className="info-row">
                        <div className="info-icon"><i className="bi bi-hash"></i></div>
                        <div>
                            <span className="info-label">Employee ID</span>
                            <div className="info-value">#{employee.id}</div>
                        </div>
                    </div>

                    <div className="info-row">
                        <div className="info-icon"><i className="bi bi-person-circle"></i></div>
                        <div>
                            <span className="info-label">Full Name</span>
                            <div className="info-value">{employee.name}</div>
                        </div>
                    </div>

                    <div className="info-row">
                        <div className="info-icon"><i className="bi bi-building"></i></div>
                        <div>
                            <span className="info-label">Department</span>
                            <div className="info-value">
                                <span className="badge bg-info text-dark me-2">{employee.dept.deptName}</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-row">
                        <div className="info-icon"><i className="bi bi-briefcase-fill"></i></div>
                        <div>
                            <span className="info-label">Designation</span>
                            <div className="info-value">{employee.dept.designation}</div>
                        </div>
                    </div>

                    <div className="info-row">
                        <div className="info-icon"><i className="bi bi-calendar-event"></i></div>
                        <div>
                            <span className="info-label">Date of Joining</span>
                            <div className="info-value">{employee.doj}</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EmployeeModal;