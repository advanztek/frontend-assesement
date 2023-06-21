import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css'
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { BiSignal4 } from "react-icons/bi";
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if email contains "@" and "."
    const isValid = email.includes('@') && email.includes('.');
    setValidEmail(isValid);
  };

  return (
    <div className='body'>
        <div className="bg-image">
          <div className="p-3 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 p-4">
              <p className='carousel'><IoMdNotificationsOutline className='icon' size={24} /></p>
              <h4 className='text-white'>Get notified when a highly correlated whale make a move.</h4>
              <p  className='sub-text-1'>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
            </div>

            <div className="col-span-12 md:col-span-8 p-4">
              <div className="row">
                <div className="col-12 col-lg-6 col-md-6 col-sm-6 p-2">
                  <div className='card p-1'>
                    <div className="flex justify-between">
                      <IoMdNotificationsOutline className='icon-black' size={24} />
                      <p className='card-text'>Save</p>
                    </div>
                    <p className='card-main-text my-3'>We’ll be sending notifications to you here</p>
                    <p className='card-input mt-2'>hello@gmail.com</p>
                  </div>
                </div>

                <div className="col-12 col-lg-6 col-md-6 col-sm-6 p-2">
                  <div className='card p-1'>
                    <div className="flex justify-between">
                      <BiSignal4 className='icon-black' size={24} />
                      <p className='card-text'>Save</p>
                    </div>
                    <p className='card-main-text my-3'>Notify me when any wallets move more than</p>
                    <p className='btn card-btn w-50 mt-3 card-main-text'>$1,000.00 <AiFillCaretDown className='icon-black' size={24} /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 row gap-4">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-4">
              <img className='w-100' src="/img/bg-2.png" />
            </div>

            <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-4 flex items-center">
              <div>
                <h4 className='heading'>Watch what the whales are doing</h4>
                <p className='sub-text'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
              </div>
              
            </div>
          </div>

          <div className='px-3'>
            <p className='heading-two w-100'>Testimonials</p>
            <hr className='break-line' />
          </div>

          <div className='p-3 row'>
            <div className='col-12 col-lg-1 col-md-1 col-sm-1 p-3'>
              <img className='vector' src='/img/vectoricon.png' />
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-12 p-3">
              <div className='card-one p-3'>
                <p className='heading-small'>Jack F <span className='sub-heading'>Ex Blackrock PM</span></p>
                <p className='text-test'>“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</p>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-6 col-sm-12 p-3">
              <div className='card-one p-3'>
                <p className='heading-small'>Yash P <span className='sub-heading'>Research, 3poch Crypto Hedge Fund</span></p>
                <p className='text-test'>“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”</p>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-6 col-sm-12 p-3">
              <div className='card-one p-3'>
                <p className='heading-small'>Shiv S <span className='sub-heading'>Co-Founder Magik Labs</span></p>
                <p className='text-test'>“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”</p>
              </div>
            </div>
          </div>
        </div>
        <div className='login-section'>
          <div className='row justify-content-center'>
            <div className='col-9'>
              <p className='login-heading'>Sign up for exclusive access.</p>
              {!validEmail && <p style={{ color: 'red', textAlign: 'center' }}>Please enter a valid email.</p>}
              <input type="email" value={email} onChange={handleChange} className='login-input form-control' placeholder='Your email address' />
              <p onClick={handleSubmit} className='btn-login mt-3'>Get started</p>
              <p className='login-sub-text mx-3'>You’ll receive an email with an invite link to join.</p>
            </div>
          </div>
          
        </div>
    </div>
  );
}

export default App;
