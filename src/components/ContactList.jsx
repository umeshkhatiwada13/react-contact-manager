import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { ContactServices } from './services/ContactService';

const ContactList = () => {
    let [state, setState] = useState({
        loading: false,
        contacts: [],
        errorMessage: ''
    });

    useEffect(() => {
        console.log("State before data fetch ", state);
        async function fetchData() {
            try {
                setState({ ...state, loading: true })
                let response = await axios.get('http://localhost:9000/contacts');
                // let response = await ContactServices.getAllContacts();
                setState({
                    ...state,
                    loading: false,
                    contacts: response.data
                })
                console.log("After fetching data");
                console.log(response);
                console.log("state ");
                console.log(state);
            } catch (e) {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: e.message
                })
            }
        }
        fetchData();

    }, []);

    let { loading, contacts, errorMessage } = state;

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
                                <p className="fst italic">Lets do it</p>
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
            {
                loading ? <Loader /> :
                    <>
                        <section className="contact-list">
                            <div className="container">
                                <div className="row">
                                    {
                                        contacts.length > 0 && contacts.map(c => {
                                            console.log("Contact ", c);
                                            return (
                                                <div className="col-md-6 mt-2" key={c.id}>
                                                    <div className="card">
                                                        <div className="row card-body align-item-center">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <img src={c.photo}
                                                                        alt="Profile" className='img-fluid contact-img' />
                                                                </div>
                                                                <div className="col-md-7">
                                                                    <ul className="list-group">
                                                                        <li className="list-group-item list-group-item-event">
                                                                            Name : <span className="fw-bold">{c.name}</span>
                                                                        </li>
                                                                        <li className="list-group-item list-group-item-event">
                                                                            Mobile : <span className="fw-bold">{c.mobile}</span>
                                                                        </li>
                                                                        <li className="list-group-item list-group-item-event">
                                                                            Email : <span className="fw-bold">{c.email}</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-1 d-flex flex-column align-items-center">
                                                                    <Link to={`/contact/view/${c.id}`} className='btn btn-warning mb-1'>
                                                                        <i className='fa fa-eye' />
                                                                    </Link>
                                                                    <Link to={`/contact/edit/${c.id}`} className='btn btn-primary my-1'>
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
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </section>
                    </>
            }
        </>
    )
}

export default ContactList