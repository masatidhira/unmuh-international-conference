import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
import "./contact.scss";

function Contact() {
    return (
        <section className="section" id="contact">
            <h3 className="sectionTitle">Contact Us</h3>

            <div className="contact">
                <MdLocationPin className="icon" />
                <p>UNIVERSITAS MUHAMMADIYAH JEMBER, EAST JAVA, INDONESIA</p>
                <p>Gumuk Kerang, Karangrejo, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68124</p>
            </div>
            <div className="contact contact-row">
                <div className="card">
                    <MdOutlineEmail className="icon" />
                    <h4>Email Us</h4>
                    <p>bts@unmuhjember.ac.id</p>
                </div>
                <div className="card">
                    <FaPhoneAlt className="icon" />
                    <h4>Call Us</h4>
                    <p>(0331) 336728</p>
                </div>
                <div className="card">
                    <MdWhatsapp className="icon" />
                    <h4>WhatsApp</h4>
                    <p>+62 81336063330</p>
                </div>
            </div>
        </section>
    )
}

export default Contact;