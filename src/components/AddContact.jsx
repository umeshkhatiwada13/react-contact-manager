import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContactList from './ContactList';
import { ContactServices } from './services/ContactService';

const AddContact = () => {
    let [state, setState] = useState({
        loading: false,
        contact: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            company: '',
            title: '',
            groupId: 0
        },
        groups: [],
        errorMessage: ''
    });

    let updateInput = (e) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [e.target.name]: e.target.value
            }
        })
    };

    let navigate = useNavigate();

    useEffect(() => {
        async function getGroups() {
            try {
                let groups = await ContactServices.getGroups();
                setState({ ...state, groups: groups.data });
            } catch (error) {
                console.log(error);
            }
        }
        getGroups();
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        console.log('form submitting');
        try {
            ContactServices.createContact(contact);
            navigate('/contact/list', { replace: true })
        } catch (error) {
            console.log(error);
            setState({ ...state, errorMessage: error.message })
            navigate('/contact/add', { replace: false });
        }
    }

    let { loading, contact, groups, errorMessage } = state;
    return (
        <>
            {/* <pre>{JSON.stringify(state.contact)}</pre> */}
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
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input type="text"
                                        name="name"
                                        onChange={updateInput}
                                        value={contact.name}
                                        required={true}
                                        className='form-control' placeholder='Name' />
                                </div>
                                <div className="mb-2">
                                    <input type="text"
                                        name='photo'
                                        onChange={updateInput}
                                        value={contact.photo}
                                        className='form-control' placeholder='Photo Url' />
                                </div>
                                <div className="mb-2">
                                    <input type="text"
                                        name='mobile'
                                        onChange={updateInput}
                                        value={contact.mobile}
                                        className='form-control' placeholder='Mobile' />
                                </div>
                                <div className="mb-2">
                                    <input type="text"
                                        name='email'
                                        onChange={updateInput}
                                        value={contact.email}
                                        className='form-control' placeholder='Email' />
                                </div>
                                <div className="mb-2">
                                    <input type="text"
                                        name='company'
                                        onChange={updateInput}
                                        value={contact.company}
                                        className='form-control' placeholder='Company' />
                                </div>
                                <div className="mb-2">
                                    <input type="text"
                                        name='title'
                                        value={contact.title}
                                        onChange={updateInput} className='form-control' placeholder='Title' />
                                </div>
                                <div className="mb-2">
                                    <select name="groupId" id=""
                                        value={contact.groupId}
                                        onChange={updateInput} className="form-control">
                                        <option value="">Select a Group</option>
                                        {
                                            groups.map(group => (
                                                <option value={group.id} key={group.id}>
                                                    {group.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn btn-success mx-2" >Submit</button>
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

export default AddContact;