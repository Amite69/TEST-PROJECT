import React from 'react'


function List({ employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return ( 
        <div className='container mt-5'>
            <div className='contain-table'>
                        <table className='striped-table'>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Salary</th>
                                    <th>Date</th>
                                    <th colSpan={2} className="text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.length > 0 ? (
                                    employees.map((employee, i) => (
                                        <tr key={employee.id}>
                                            <td>{i + 1}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>{formatter.format(employee.salary)}</td>
                                            <td>{employee.date} </td>
                                            <td className="text-right">
                                                <button
                                                    onClick={() => handleEdit(employee.id)}
                                                    className="button muted-button"
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.9">
                                                        <path d="M8 13.333H14" stroke="#475261" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M11 2.33316C11.2652 2.06794 11.6249 1.91895 12 1.91895C12.1857 1.91895 12.3696 1.95553 12.5412 2.0266C12.7128 2.09767 12.8687 2.20184 13 2.33316C13.1313 2.46448 13.2355 2.62038 13.3066 2.79196C13.3776 2.96354 13.4142 3.14744 13.4142 3.33316C13.4142 3.51888 13.3776 3.70277 13.3066 3.87436C13.2355 4.04594 13.1313 4.20184 13 4.33316L4.66667 12.6665L2 13.3332L2.66667 10.6665L11 2.33316Z" stroke="#475261" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </td>
                                            <td className="text-left">
                                                <button
                                                    onClick={() => handleDelete(employee.id)}
                                                    className="button muted-button"
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.9">
                                                        <path d="M2 4H3.33333H14" stroke="#475261" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M5.33301 3.99967V2.66634C5.33301 2.31272 5.47348 1.97358 5.72353 1.72353C5.97358 1.47348 6.31272 1.33301 6.66634 1.33301H9.33301C9.68663 1.33301 10.0258 1.47348 10.2758 1.72353C10.5259 1.97358 10.6663 2.31272 10.6663 2.66634V3.99967M12.6663 3.99967V13.333C12.6663 13.6866 12.5259 14.0258 12.2758 14.2758C12.0258 14.5259 11.6866 14.6663 11.333 14.6663H4.66634C4.31272 14.6663 3.97358 14.5259 3.72353 14.2758C3.47348 14.0258 3.33301 13.6866 3.33301 13.333V3.99967H12.6663Z" stroke="#475261" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M6.66699 7.33301V11.333" stroke="#475261" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M9.33301 7.33301V11.333" stroke="#475261" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </g>
                                                    </svg>

                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7}>No Employees</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
            </div>
        </div>
        
    )
}

export default List