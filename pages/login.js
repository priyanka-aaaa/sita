import Head from 'next/head'
import Link from "next/link";

import styles from '../styles/Home.module.css'
import Image from "next/image"
import axios from 'axios'
import SweetAlert from 'react-bootstrap-sweetalert';

import React, { useState } from "react";

import HomeLayout from '../components/HomeLayout';
import Loader from '../components/Loader';
export default function Login() {
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
  <h1 className="register-race">
    Register for Race Championship | 24th Edition
  </h1>
  <p className="Registration">Registration.</p>
  <div className="row">
    <div className="col-md-6">
      <div className="no-acc">
        <h5 className="sign-in">Sign in</h5>
        <form action="/action_page.php">
          <div className="mb-3 mt-3">
            <input
              type="email"
              className="form-control login_form"
              id="email"
              placeholder="E-mail address"
              name="email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control login_form"
              id="pwd"
              placeholder="Password"
              name="pswd"
            />
          </div>
          <div className="remember-forget">
            <div className="form-check mb-3">
              <div className="cp-input">
                <input id="remember" name="remember" type="checkbox" />
                <label htmlFor="remember">Remember Me</label>
              </div>
            </div>
            <div className="forgot-pass">Forgot your password?</div>
          </div>
          <div className="row">
            <button type="button" className="btn">
              <span className="quick_reg">Sign in</span>
              {/* <span className="material-symbols-outlined">chevron_right</span> */}
            </button>
            <button type="button" className="btn">
              <span className="quick_reg">Regsiter For Someone</span>
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
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="no-acc">
        <h5 className="no-account">No account? No problem.</h5>
        <p className="continue-register">
          Continue Registration without an account.
        </p>
        <Link legacyBehavior href='/register' className="btn" >
        <a type="button" className="btn">
          <span className="quick_reg">Quick Registration</span>
          {/* <span className="material-symbols-outlined">chevron_right</span> */}
        </a>
        </Link>
      </div>
    </div>
  </div>
</div>

    </HomeLayout>
  )
}
