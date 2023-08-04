import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Image from "next/image"
import axios from 'axios'
import SweetAlert from 'react-bootstrap-sweetalert';

import React, { useState } from "react";

import HomeLayout from '../components/HomeLayout';
import Loader from '../components/Loader';
export default function Home() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [address, setaddress] = useState("");
  const [loaderShow, setloaderShow] = useState(false);
  const [emailError, setemailError] = useState("");
  const [showSweetAlert, setshowSweetAlert] = useState(false);


  const handleSubmit = (event) => {

    event.preventDefault();






    var obj = {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      dateOfBirth: dateOfBirth,
      address: address

    }

    axios.post(process.env.REACT_APP_API_URL + 'api/register', obj)
      .then(res => {
      
        if (res.data.message == "user already exist") {
          setemailError("Email already exist");
        }

        if (res.data.success === true) {
         
          setshowSweetAlert(true)
          setfirstname("")
          setlastname("")
          setphone("")
          setemail("")
          setdateOfBirth("")
          setaddress("")


        }
        if (res.data.message == "user already exist") {
         
          setemailError("Email already exist");
        }




      }
      )
      .catch(error => {
        console.log("error",error)
      });
  }
  return (
    <HomeLayout>
      {loaderShow === true ?
        <Loader /> : null}
      {showSweetAlert ?
        <SweetAlert
          success
          title="Success!"
          onConfirm={(value) => {
            setshowSweetAlert(false)
          }}
        >
          You are registered successfully. Please check your email for password.
        </SweetAlert>
        : null
      }
      <div className="container">
        <div className="row">
          <div className="no-acc-sign">
            <h5 className="sign-in text-center"> Register Now</h5>
            <p className="sign-in text-center">
              Lorem Lpsum is simply dummy test of the prinnting and typesetting
              industry.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3 mt-3">
                    <input required
                      type="text"
                      onChange={(e) => setfirstname(e.target.value)}
                      className="form-control login_form"
                      placeholder="Name"
                      value={firstname}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 mt-3">
                    <input required
                      type="text"
                      onChange={(e) => setlastname(e.target.value)}
                      className="form-control login_form"
                      placeholder="Last Name"
                      value={lastname}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3 mt-3">
                    <input required
                      type="text"
                      onChange={(e) => setphone(e.target.value)}
                      className="form-control login_form"
                      placeholder="Phone Number"
                      value={phone}

                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 mt-3">
                    <input required
                      type="email"
                      onChange={(e) => setemail(e.target.value)}
                      className="form-control login_form"
                      placeholder="Email"
                      value={email}
                    />
                    {/* emailError */}
                  </div>
                  <span className="error-msg"> {emailError}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3 mt-3">
                    <input required
                      type="date"
                      onChange={(e) => setdateOfBirth(e.target.value)}
                      className="form-control login_form"
                      placeholder="Date of birth"
                      value={dateOfBirth}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 mt-3">
                    <input required
                      type="text"
                      onChange={(e) => setaddress(e.target.value)}
                      className="form-control login_form"
                      placeholder="Address"
                      value={address}

                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <button type="submit" className="btn">
                  <span className="quick_reg">Regsiter</span>
                  {/* <span className="material-symbols-outlined">chevron_right</span> */}
                </button>
              </div>
              <div className="continue">
                <span>Or continue with</span>
              </div>
            </form>
            <div className="row social-icon">
              <img src="/images/facebook.png" className="loginIcon" alt="logo" />
              <img src="/images/google.png" className="loginIcon" alt="logo" />
              <img src="/images/twitter.png" className="loginIcon" alt="logo" />
              <img src="/images/linkedin.png" className="loginIcon" alt="logo" />


              {/* <Image src={facebook} width="" height="" className="loginIcon"/>
      <Image src={google} width="" height="" className="loginIcon"/>
      <Image src={twitter} width="" height="" className="loginIcon"/>
      <Image src={linkedin} width="" height="" className="loginIcon"/> */}
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
