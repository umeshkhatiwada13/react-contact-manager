import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ContactServices } from './services/ContactService';
import Loader from './Loader';

const EditContact = () => {
    let { contactId } = useParams();
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
    })

    let updateInput = (e) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [e.target.name]: e.target.value
            }
        })
    };

    useEffect(() => {
        async function fetchData() {
            try {
                // set loading true to enable loader if used in the ui
                setState({ ...state, loading: true });
                let response = await ContactServices.getContactById(contactId);
                let group = await ContactServices.getGroups();
                setState({
                    ...state,
                    loading: false,
                    contact: response.data,
                    groups: group.data,
                });
            } catch (error) {
                console.log(error);
                // setting error message to the state and setting loading false to stop loader in case 
                // any is used
                setState({
                    ...state, loading: false,
                    errorMessage: error.message
                });
            }
        }
        fetchData()
    },
        //use this api call in case contactId is changed, which means call the api for each new contactId or new user
        [contactId])

    // setting group from here to state is not working
    // useEffect(() => {
    //     async function fetchGroup() {
    //         try {
    //             let group = await ContactServices.getGroups();
    //             console.log("group ", group.data);
    //             setState({
    //                 ...state,
    //                 groups: group.data,
    //             })
    //         } catch (error) {

    //         }
    //     }
    //     fetchGroup();
    // }, [])


    let { loading, contact, groups, errormessage } = state;
    let navigate = useNavigate();

    let submitForm = async (event) => {
        event.preventDefault();
        try {
             let response = await ContactServices.updateContact(contact, contactId);
 
             if (response) {
                navigate('/contact/list', true);
            } else {

            }
        } catch (error) {
            setState({
                ...state,
                errorMessage: error
            })
            navigate(`/contact/edit/${contactId}`, false);
        }
    }

    return (
        <>
            {
                loading ? <Loader /> :
                    <section className="add-contact">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h3 text-success fw-bold">Edit Contact</p>
                                    <p className="fst-italic">Lets do it</p>
                                    {/* <pre>{JSON.stringify(contact)}</pre> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <form onSubmit={submitForm}>
                                        <div className="mb-2">
                                            <input type="text" className='form-control'
                                                name='name'
                                                placeholder='Name'
                                                onChange={updateInput}
                                                value={contact.name} />
                                        </div>
                                        <div className="mb-2">
                                            <input type="text" className='form-control'
                                                name='photo'
                                                placeholder='Photo Url'
                                                onChange={updateInput}
                                                value={contact.photo} />
                                        </div>
                                        <div className="mb-2">
                                            <input type="text" className='form-control'
                                                name='mobile'
                                                placeholder='Mobile'
                                                onChange={updateInput}
                                                value={contact.mobile} />
                                        </div>
                                        <div className="mb-2">
                                            <input type="text" className='form-control'
                                                name='email'
                                                placeholder='Email'
                                                onChange={updateInput}
                                                value={contact.email} />
                                        </div>
                                        <div className="mb-2">
                                            <input type="text" className='form-control'
                                                name='company'
                                                placeholder='Company'
                                                onChange={updateInput}
                                                value={contact.company} />
                                        </div>
                                        <div className="mb-2">
                                            <input type="text" className='form-control'
                                                name='title'
                                                placeholder='Title'
                                                onChange={updateInput}
                                                value={contact.title} />
                                        </div>
                                        <div className="mb-2">
                                            <select name="groupId"
                                                value={contact.groupId}
                                                onChange={updateInput}
                                                id="" className="form-control">
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
                                            <button type="submit" className="btn btn-primary mx-2" >Update</button>
                                            <Link to={'/contact/list'} className='btn btn-dark'>Cancel</Link>
                                        </div>
                                    </form>

                                </div>
                                <div className="col-6">
                                    <img src={contact.photo}
                                        alt="Profile" className='img-fluid contact-img' />
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}

export default EditContact;