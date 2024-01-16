import unmuhDepan from "../../images/unmuh-depan.jpg";
import "./banner.scss"

function Banner() {

    return (
        <section className="bannerSection" id="banner">
            <div className="overlay"></div>
            <img src={unmuhDepan} alt="FOTO UNMUH DEPAN" className="imageBG"/>

            <div className="bannerContent container">
                <div className="textDiv">
                    <h1>The 2024 International Conference on Computer Science, Information Technology and Engineering</h1>
                    <p>Conference Record Number: #577XX</p>
                </div>
            </div>
        </section>
    )
}


export default Banner;