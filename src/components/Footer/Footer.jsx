import { FaRegCopyright } from "react-icons/fa6";
import "./footer.scss";

function Footer() {
    return (
        <section className="footerSection">
            <footer className="footer">
                <p>
                    <FaRegCopyright className="icon" />
                    Copyright <b> University of Muhammadiyah Jember</b>. All Rights Reserved
                </p>
                <p>Designed by <a href="https://masatidhira.github.io/" target="_blank">masatidhira</a></p>
            </footer>
        </section>
    )
}

export default Footer;