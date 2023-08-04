import Head from 'next/head'
import Link from "next/link";
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
                console.log("error", error)
            });
    }
    return (
        <HomeLayout>
            <section class="our-contact">
                <div className='container'>
                    <div class="row our-service" >
                        <h2 class="our-service-heading">CONTACT US</h2>
                        <p class="our-service-para">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point o
                        </p>
                    </div>
                </div>
            </section>
            <div class="container-fluid hour-detail">
                <div class="row">
                    <div class="col-md-4">
                        <h3 class="hour-heading">
                            OPEN HOURS
                        </h3>
                        <p class="timing">
                            Mon-Fri 9 AM -6 AM<br />
                            Saturday: 9 AM -6 AM<br />
                            Sunday: Closed
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h3 class="hour-heading">
                            ADDRESS                    </h3>
                        <p class="timing">
                          23, New Yark,  <br />
                          NY 1005<br />
                          <Link legacyBehavior href='/' className="address-contact" >
                            <a className="address-contact" >Check Location </a>
                        </Link>

                        </p>
                    </div>
                    <div class="col-md-4">
                        <h3 class="hour-heading">
                          GET IN TOUCH
                        </h3>
                        <p class="timing">
                           Telephone:+1234567898<br />
                            Email:your@yks@gmal.com<br />
                            <Link legacyBehavior href='/' className="address-contact" >
                            <a className="address-contact" >Contact Form</a>
                        </Link>

                        
                        </p>
                    </div>
                </div>
            </div>
          
            <div class="container-fluid home-detail">
              
                <section class="purchase-ticket">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="purchase-img">
                                <img src="/images/purchase.png" className="purchase-img" alt="logo" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="purchase-ticket-form">
                                <h3 class="purchase-heading">
                                    GET IN TOUCH
                                </h3>
                                <div class="admin-contact">
                                    <p class="purchase-para">
                                        Lorem lipsem is dummy text of printing
                                    </p>
                                    <p>info@example.com</p>
                                    <p>+012345677899</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className=" mt-3">
                                            <input required
                                                type="text"
                                                onChange={(e) => setfirstname(e.target.value)}
                                                className="form-control purchase_form"
                                                placeholder="Name"
                                                value={firstname}
                                            />
                                        </div>
                                        <div className=" mt-3">
                                            <input required
                                                type="text"
                                                onChange={(e) => setlastname(e.target.value)}
                                                className="form-control purchase_form"
                                                placeholder="Email"
                                                value={lastname}
                                            />
                                        </div>
                                    </div>
                                    <div className=" mt-3">
                                        <input required
                                            type="text"
                                            onChange={(e) => setphone(e.target.value)}
                                            className="form-control purchase_form"
                                            placeholder="Event"
                                            value={phone}
                                        />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <textarea class="form-control" id="purchase-text" rows="4" placeholder='Type your message'></textarea>
                                    </div>
                                    <div className="row btn-purchase-submit">
                                        <button type="submit" className="btn purchase-submit">
                                            <span className="quick_reg">Submit</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </HomeLayout>
    )
}
