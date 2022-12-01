import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import ContactList from './ContactList';

const AddContact = () => {
    return (
        <>
            <section className="add-contact">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success fw-bold">Create Contact</p>
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
                                    <button type="button" className="btn btn-success mx-2" >Submit</button>
                                    <Link to={'/contact/list'} className='btn btn-dark'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddContact