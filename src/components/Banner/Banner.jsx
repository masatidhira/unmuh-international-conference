import unmuhDepan from "../../images/unmuh-depan.jpg";
import "./banner.scss"

function Banner() {

    return (
        <section className="bannerSection" id="banner">
            <div className="overlay"></div>
            <img src={unmuhDepan} alt="FOTO UNMUH DEPAN" className="imageBG"/>

            <div className="bannerContent container">
                <div className="textDiv">
                    <h1>Beyond Technology Summit on Informatics International Conference 2024</h1>
                    <p>Conference Record Number #577XX</p>
                </div>
            </div>
        </section>
    )
}


export default Banner;