import prof1 from "../../images/sundar.jpg";
import prof2 from "../../images/dumbledor.jpg";
import prof3 from "../../images/aprofessorss.jpg";
import "./speakers.scss";

function Speakers() {
    return (
        <section className="section" id="plenarySpeaker">
            <h2 className="sectionTitle">Plenary Speaker</h2>

            <ul className="cardList">
                <li className="cardItem">
                    <figure className="card">
                        <img src={prof1} alt="Prof Potrait" />
                        <figcaption className="name">Prof. Template Name S.T</figcaption>
                        <figcaption className="department"><b> Department of Engineering Technology, Faculty of Technical and Vocational Education, Sultan Idris Education University, Malaysia</b></figcaption>
                        <figcaption className="speaker"><i>Keynote Speaker 1</i></figcaption>
                    </figure>
                </li>
                <li className="cardItem">
                    <figure className="card">
                        <img src={prof2} alt="Prof Potrait" />
                        <figcaption className="name">Prof. Template Name S.T</figcaption>
                        <figcaption className="department"><b>Faculty of Science and Technology, Sampoerna University, Jakarta</b></figcaption>
                        <figcaption className="speaker"><i>Keynote Speaker 2</i></figcaption>
                    </figure>
                </li>
                <li className="cardItem">
                    <figure className="card">
                        <img src={prof3} alt="Prof Potrait" />
                        <figcaption className="name">Prof. Template Name S.T</figcaption>
                        <figcaption className="department"><b>Anadolu University Vice Rectors, Turkey</b></figcaption>
                        <figcaption className="speaker"><i>Keynote Speaker 3</i></figcaption>
                    </figure>
                </li>
                <li className="cardItem">
                    <figure className="card">
                        <img src={prof3} alt="Prof Potrait" />
                        <figcaption className="name">Prof. Template Name S.T</figcaption>
                        <figcaption className="department"><b>Chairman of APTIKOM, Indonesia</b></figcaption>
                        <figcaption className="speaker"><i>Keynote Speaker 4</i></figcaption>
                    </figure>
                </li>
                <li className="cardItem">
                    <figure className="card">
                        <img src={prof2} alt="Prof Potrait" />
                        <figcaption className="name">Prof. Template Name S.T</figcaption>
                        <figcaption className="department"><b>Department of Information Technology Faculty of Computing & Information Technology in Rabigh King Abdulaziz University, P.O. Box 344, Rabigh 21911, Saudi Arabia</b></figcaption>
                        <figcaption className="speaker"><i>Keynote Speaker 5</i></figcaption>
                    </figure>
                </li>
                
            </ul>
        </section>
    )
}

export default Speakers;