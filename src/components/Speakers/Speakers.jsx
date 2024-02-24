import prof1 from "../../images/sundar.jpg";
import imgRiyantoSarno from "../../images/RiyantoSarno.jpg";
import "./speakers.scss";

function Speakers() {
    return (
        <section className="section" id="plenarySpeaker">
            <h2 className="sectionTitle">Keynote Speaker</h2>

            <ul className="cardList">
                <li className="cardItem">
                    <figure className="card">
                        <img src={prof1} alt="Prof Potrait" />
                        <figcaption className="name">Prof. Mustofa</figcaption>
                        <figcaption className="department"><b> Faculty of Engineering, University of Muhammadiyah Jember, Indonesia</b></figcaption>
                        <figcaption className="speaker"><i>Keynote Speaker 1</i></figcaption>
                    </figure>
                </li>
                <li className="cardItem">
                    <figure className="card">
                        <img src={imgRiyantoSarno} alt="Prof Potrait" />
                        <figcaption className="name">Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc Ph.D</figcaption>
                        <figcaption className="department"><b>S3 – News Brunswick University Canada</b></figcaption>
                        <figcaption className="speaker"><i>Keynote Speaker 2</i></figcaption>
                    </figure>
                </li>
            </ul>
        </section>
    )
}

export default Speakers;