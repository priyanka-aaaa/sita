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
            
          
          
            <div class="container-fluid home-detail">
              
                <section class="purchase-ticket">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="purchase-img">
                                <img src="/images/event-page.png" className="purchase-img" alt="logo" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="purchase-ticket-form">
                                <h3 class="detail-heading">
                                 Ticket Details
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
