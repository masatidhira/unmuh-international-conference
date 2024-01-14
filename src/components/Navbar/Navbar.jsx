import { useState } from "react";
import unmuhImg from "../../images/unmuh-jember.png";
import {FiX} from "react-icons/fi"
import {FiMenu} from "react-icons/fi"
import "./navbar.scss";

function Navbar() {
    const [navBarClose, setNavBarClose] = useState(true);

    const toggleNavBarClose = () => {
        setNavBarClose(!navBarClose);
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <img src={unmuhImg} alt="UNMUH LOGO" />
                        <div className="text">
                            <h1>UNMUH JEMBER</h1>
                            <h2>International Conference</h2>
                        </div>
                        
                    </a>
                </div>

                <div className={"navBar " + (navBarClose ? "is-closed" : "")}>
                    <ul className="navList flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Call For Papers</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Plenary Speaker</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Commitee</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Important Dates</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Registration</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Submission</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="toggleNavBar" onClick={() => toggleNavBarClose()}>
                    <FiMenu className={"icon " + (navBarClose ? "": "is-hidden")} />
                    <FiX className={"icon " + (navBarClose ? "is-hidden" : "")} />
                </div>
            </header>
        </section>
    )
}

export default Navbar;