import React from 'react'
import {Link} from "react-router-dom";


function Header({ setIsAdding }) {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm mt-2">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                    <h1 className='brand'>EMPLOYEE MANAGEMENT SYSTEM </h1>
                    </Link>
                    <div>
                        <Link to={'/employees/add'} className="mr">
                            <button onClick={() => setIsAdding(true)} className='accent-button add-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className='bi bi-plus-circle-fill' viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                </svg> ADD EMPLOYEE
                            </button>
                        </Link>
                
                        <Link to={'/employees/upload'}>
                            <button onClick={() => setIsAdding(true)} className='accent-button add-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className='bi bi-plus-circle-fill' viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                </svg> UPLOAD EMPLOYEE JSON FILE
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            
        </header>
    )
}

export default Header