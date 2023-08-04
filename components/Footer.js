import React from 'react'

export const Footer = () => {
  return (
    <footer
    className="text-center text-lg-start text-white"
    style={{ backgroundColor: "#3e4551" }}
  >
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: Links */}
      <section className="">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">OFFICE</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  USA -
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  785 15,Street,Office 478
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Berlin,De 81556
                </a>
              </li>
              <li className="footer-email">
                <a href="#!" className="text-white">
                  info@example.com
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  +0123456789
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Competitions
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  privacy
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">EVENT INFO</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Event Info
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Course Maps
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  {" "}
                  Race Packs
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Results
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">NEWSLETTER</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fa fa-envelope" aria-hidden="true" />
                <input
                  type="text"
                  className="newsletter-email"
                  placeholder="Enter Your Email Address"
                />
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="mb-4" />
    </div>
  </footer>
  
  )
}
