import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = () => {
    return (
        <>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">
                                    Contact Manager
                                    <Link to={'/contact/add'} className="btn btn-primary ms-2" >
                                        <i className='fa fa-plus-circle me-2' />New </Link>
                                </p>
                                <p className="fst italic">Hello World</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className='row'>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder='Search Name' />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className="btn btn-outline-dark" placeholder='Search' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="row card-body align-item-center">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                                                alt="Profile" className='img-fluid contact-img' />
                                        </div>
                                        <div className="col-md-7">
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
                                            </ul>
                                        </div>
                                        <div className="col-md-1 d-flex flex-column align-items-center">
                                            <Link to={'/contact/view/:contactId'} className='btn btn-warning mb-1'>
                                                <i className='fa fa-eye' />
                                            </Link>
                                            <Link to={'/contact/edit/:contactId'} className='btn btn-primary my-1'>
                                                <i className='fa fa-pen' />
                                            </Link>
                                            <button className='btn btn-danger my-1'>
                                                <i className='fa fa-trash' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactList