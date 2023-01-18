import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { ContactServices } from './services/ContactService';

const ContactList = () => {
    let [state, setState] = useState({
        loading: false,
        contacts: [],
        filteredContacts: [],
        errorMessage: ''
    });

    let [query, setQuery] = useState({
        text: '',
    })

    useEffect(() => {
        async function fetchData() {
            try {
                setState({ ...state, loading: true })
                let response = await ContactServices.getAllContacts();
                //passing current state and settign response data to contacts 
                setState({
                    ...state,
                    loading: false,
                    contacts: response.data,
                    filteredContacts: response.data,
                })
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

    let deleteContact = async (contactId) => {
        try {
            let response = await ContactServices.deleteContact(contactId);
            if (response) {
                setState({ ...state, loading: true })
                let response = await ContactServices.getAllContacts();
                //passing current state and settign response data to contacts 
                setState({
                    ...state,
                    loading: false,
                    contacts: response.data,
                    filteredContacts: response.data
                })
            }
        } catch (error) {
            console.log(error.message);
            setState({
                ...state,
                errorMessage: error.message,
            })
        }
    }

    // set user-input in search box to query.text , which keyword is used later to search 
    let updateSearchText = (e) => {
        setQuery({
            ...query,
            text: e.target.value
        })
        // returnData(e.target.value);
    }

    let returnData = (text) => {
        let inputText = text ? text : query.text;
        let filteredData = state.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(inputText);
        })
        setState({
            ...state,
            filteredContacts: filteredData
        })
    }

    //destructuring the data set into current state from api
    let { loading, contacts, filteredContacts, errorMessage } = state;

    return (
        <>
            {/* <pre>{JSON.stringify(query)}</pre> */}
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
                                            <input type="text" value={query.text} onChange={updateSearchText} className="form-control" placeholder='Search Name' />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <button type='button' className="btn btn-outline-dark" onClick={() => returnData()}> Search </button>
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
                                        filteredContacts.length > 0 && filteredContacts.map(c => {
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
                                                                    <button className='btn btn-danger my-1' onClick={() => deleteContact(c.id)}>
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

export default ContactList;