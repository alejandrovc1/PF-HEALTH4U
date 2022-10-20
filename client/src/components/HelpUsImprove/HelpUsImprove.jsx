import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import st from './HelpUsImp.module.css'
import { createMessage } from '../../actions/index'
import { Nav } from '../Nav';
import { Footer } from '../Footer/index';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image from '../../image/img4.jpg'

export default function HelpUsImprove() {

    const dispatch = useDispatch()

    const [Message, setMessage] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setMessage((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (e.target.name == 'update') {
            console.log('SOY EL MENSAJE', Message)
            dispatch(createMessage(Message))
            setMessage({
                name: '',
                email: '',
                message: '',
            })
        }
    };

    return (
        <div>
            <Nav />
            <br />
            <h1 className={st.Title}>FORM - HELP US TO IMPROVE</h1>
            <br />

            <div className="color-overlay d-flex justify-content-center align-items-center">

                <div className={st.float1}>
                    <img src={image} className={st.img} alt="img" />
                </div>
                <div className={st.float}>
                    <Form classname="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <br />
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={Message.name} name="name" onChange={handleChange} placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={Message.email} name="email" onChange={handleChange} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" value={Message.message} name="message" onChange={handleChange} placeholder="Write your message" />
                        </Form.Group>

                        <Button name='update' variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <Footer />
        </div>
    )
};
