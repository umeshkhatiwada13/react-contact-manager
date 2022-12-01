import React from 'react'
import { Link } from 'react-router-dom'

const ViewContact = () => {
    return (
        <>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Test data</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                                alt="Profile" className='img-fluid contact-img' />
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-event">
                                    Name : <span className="fw-bold">Ram</span>
                                </li>
                                <li className="list-group-item list-group-item-event">
                                    Mobile : <span className="fw-bold">1234567890</span>
                                </li>
                                <li className="list-group-item list-group-item-event">
                                    Email : <span className="fw-bold">ram@gmail.com</span>
                                </li>
                                <li className="list-group-item list-group-item-event">
                                    Company : <span className="fw-bold">1234567890</span>
                                </li>
                                <li className="list-group-item list-group-item-event">
                                    Title : <span className="fw-bold">ram@gmail.com</span>
                                </li>
                                <li className="list-group-item list-group-item-event">
                                    Group : <span className="fw-bold">ram@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contact/list'} className='btn btn-warning'>Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ViewContact