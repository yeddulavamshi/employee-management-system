import React from 'react';
import '../App.css'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-white text-center text-dark py-4 mt-5 shadow-lg">
        <div className="container text-center">
            <small className='fs-6 fw-bold text-muted'>
                &copy; {currentYear} 
                <span className="fw-bold ms-2 text-dark">
                    Bridge<span className="animated-soft">Soft</span>
                </span>
                . All Rights Reserved.
            </small> 
        </div>
    </footer>
  )
}

export default Footer;