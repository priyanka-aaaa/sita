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
      <section class="sporing-service">
        <div class="row sporting-service" >
          <h2 class="sporting-service-heading">SPORTING SERVICES <br />YOU NEED</h2>
          <p class="sport-service-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          </p>
          <div className="row">
            <button type="submit" className="btn read-more">
              <span className="quick_reg">Read More</span>
            </button>
          </div>
        </div>
      </section>
      <div class="container-fluid home-detail">
        <div class="row">
          <div class="latest-event">
            <button type="button" class="btn btn-info latest-event">Latest Events</button>
          </div>
        </div>
        <section class="event-sch">
          <div class="row">
            <div class="col-md-4">
              <div class="event-schedule">
                EVENT SCHEDULE
              </div>
            </div>
            <div class="col-md-4">
              <p class="event-schedule-para">Lorem lipsem is simply dummy text of the printing and typesetting industry</p>
            </div>
            <div class="col-md-4">
              <div class="schedule-view-more">
              <Link legacyBehavior href='/' className="nav-link" >
                            <a className="viewmore" >View More</a>
                        </Link>

                </div>
            </div>
          </div>
        </section>
        <div class=" event-type">
          <p><a>Active events</a></p>
          <p><a>Upcoming events</a></p>
          <p><a>Live events</a></p>
          <p><a>Past events</a></p>

          
        </div>
        <section class="event-list">
          <div class="row">
            <div class="col-md-2">
              <p class="date"> 04<br />June,2023</p>
            </div>
            <div class="col-md-8">
              <img src="/images/event.png" class="event-img" />
              <div class="championship">
                <h3 class="chamion-heading">
                  Cycle Race Championship
                </h3>
                <p class="chamion-para">New York Jun 4,2023, 8:00-Jun 9,2023 17:00 </p>
              </div>
            </div>
            <div class="col-md-2">
              <p class="price">$55 </p>
            </div>
          </div>
        </section>
        <section class="what-say">
          <div class="row">
            <div class="col-md-6">
              <div class="TESTIMOVIALS-details">
                <div class="test-content">

              
              <div class="testmineral">
                TESTIMOVIALS
              </div>
              <h3 class="what-they">
                WHAT THEY SAY
              </h3>
              <p class="testmineral-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              </p>
              <div class="quotes">
         
              <img src="/images/quote.png" className="quote" alt="logo" />

              </div>
            </div>
            </div>
            </div>
            <div class="col-md-6">
              <img src="/images/what-say.png" alt="what-say" />
            </div>
          </div>
        </section>
        <div class="sport-brand">
          <img src="/images/sport-brand1.jpg" className="sport-brand-img" alt="logo" />
          <img src="/images/sport-brand2.jpg" className="sport-brand-img" alt="logo" />
          <img src="/images/sport-brand3.jpg" className="sport-brand-img" alt="logo" />
          <img src="/images/sport-brand4.jpg" className="sport-brand-img" alt="logo" />
          <img src="/images/sport-brand5.jpg" className="sport-brand-img" alt="logo" />
        </div>
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
                PURCHASING TICKETS
              </h3>
              <div class="admin-contact">
              <p class="purchase-para">
                The event of purchasing tickets for others
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
