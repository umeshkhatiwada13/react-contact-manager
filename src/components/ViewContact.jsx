import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader';

const ViewContact = () => {
    let { contactId } = useParams();
    let [state, setState] = useState({
        loading: false,
        contact: {},
        errorMessage: '',
        group: {},
    });

    console.log("Contact Id  ", contactId)

    useEffect(() => {
        async function fetchData() {
            setState({
                ...state,
                loading: true
            })
            try {
                let response = await axios.get(`http://localhost:9000/contacts/${contactId}`);
                let groupId = response.data.groupId;
                // let groupResponse = await ContactServices.getGroup(response);
                let groupResponse = await axios.get(`http://localhost:9000/groups/${groupId}`)
                setState({
                    ...state,
                    contact: response.data,
                    loading: false,
                    group: groupResponse.data
                })
            } catch (e) {
                setState({
                    ...state,
                    errorMessage: e
                })
            }
        }

        fetchData();
    }, [contactId]);

    let { loading, contact, errorMessage, group } = state;

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
            {loading ? <Loader /> : <>
                {
                    Object.keys(contact).length > 0 &&
                    <section className="view-contact mt-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={contact.photo}
                                        alt="Profile" className='img-fluid contact-img' />
                                </div>
                                <div className="col-md-8">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-event">
                                            Name : <span className="fw-bold">{contact.name}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-event">
                                            Mobile : <span className="fw-bold">{contact.mobile}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-event">
                                            Email : <span className="fw-bold">{contact.email}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-event">
                                            Company : <span className="fw-bold">{contact.company}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-event">
                                            Title : <span className="fw-bold">{contact.title}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-event">
                                            Group : <span className="fw-bold">{group.name}</span>
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
                }
            </>}
        </>
    )
}

export default ViewContact;