import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2pzjkk5', 'template_xbwdctp', form.current, {
                publicKey: 'g-3o1LobAHazWuaw-',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='Join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span className='stroke-text'>YOUR BODY</span>
                    <span>WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form action="" className='email-container' onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter your email' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join
