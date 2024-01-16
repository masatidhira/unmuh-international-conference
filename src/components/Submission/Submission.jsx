
import "./submission.scss";

function Submission() {

    return (
        <section className="section" id="submission">
            <h3 className="sectionTitle">Submission And Camera Ready</h3>

            <article>
                <h4 className="title">Submission</h4>
                <p>Prospective authors are invited to submit full papers of 4-6 pages (including tables, figures and references) in standard IEEE double-column format. <b>Accepted papers </b> will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplores scope and quality requirements. Please submit your paper via EDAS New users are required to register with EDAS before paper submission.</p>
                <p>Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements
                The manuscript template for Microsoft Word can be downloaded from: <a href="#">http://bit.ly/template-biic</a> </p>
                <p>Template Presentation for PPT can be downloaded from: <a href="#">https://bit.ly/template-ppt-iccosite</a></p>
                <p>The authors can submit the manuscript on EDAS : <a href="#">Click Here</a></p>
            </article>

            <article>
                <h4 className="title">Review Process</h4>
                <p>All paper submissions will be checked for originality. Due to IEEE policy, papers with high similarity score may not be accepted by the conference. All submitted papers are subjected to a peer review process by 3 reviewers. Decision of a paper acceptance is based on the average score and the comments given by the reviewers. The accepted papers must be revised according to the reviewers comments and suggestions, before inclusion in the conference proceedings.</p>
            </article>
            <article>
                <h4 className="title">Final Manuscript (Camera Ready)</h4>
                <p>ABefore uploading the final version (camera ready) of your paper we kindly ask you to verify if your PDF is compatible with IEEE Xplore. IEEE offers a service for checking the PDF compatibility:</p>
                <ol>
                    <li>Please go to https://ieee-pdf-express.org/</li>
                    <li>Enter the following conference ID:  57641X</li>
                    <li>Log into the PDF Express Website. If you do not have an account please create one.</li>
                    <li>Follow the steps to complete the PDF verification process.</li>
                    <li>More information Click Here</li>
                </ol>
            </article>

        </section>
    )
}

export default Submission;