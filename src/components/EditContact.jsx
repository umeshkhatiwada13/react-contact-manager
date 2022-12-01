import React from 'react';
import { Link } from 'react-router-dom';

const EditContact = () => {
    return (
        <>
            <section className="add-contact">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success fw-bold">Edit Contact</p>
                            <p className="fst-italic">Lets do it</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form action="">
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Photo Url' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Mobile' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Email' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Company' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Title' />
                                </div>
                                <div className="mb-2">
                                    <select name="" id="" className="form-control">
                                        <option value="">Select a Group</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <button type="button" className="btn btn-primary mx-2" >Update</button>
                                    <Link to={'/contact/list'} className='btn btn-dark'>Cancel</Link>
                                </div>
                            </form>

                        </div>
                        <div className="col-6">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                                alt="Profile" className='img-fluid contact-img' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditContact