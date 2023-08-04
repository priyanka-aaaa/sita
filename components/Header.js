import React from 'react'
import Image from "next/image"
import Link from "next/link";

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <img src="/images/logo.jpg" className="nav-logo" alt="logo" />
                       
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href='/' className="nav-link" >
                            <a className="nav-link" >HOME</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href='/event' className="nav-link" >
                            <a className="nav-link nav-event" href="#">EVENTS</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href='/result' className="nav-link" >
                            <a className="nav-link" href="#">RESULT</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href='/service' className="nav-link" >
                            <a className="nav-link" href="#">SERVICES</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href='/rental' className="nav-link" >
                            <a className="nav-link" href="#">RENTAL
                                EQUIPMENT</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href='/gallery' className="nav-link" >
                            <a className="nav-link" href="#">GALLERY</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href='/contact' className="nav-link" >
                            <a className="nav-link" href="#">CONTACT</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href='/login' className="nav-link" >
                            <a className="nav-link" href="#">LOGIN</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
