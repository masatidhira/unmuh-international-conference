
import "./registration.scss";


function Registration() {
    return (
        <section className="section" id="registration">
            <h3 className="sectionTitle">Registration Fee</h3>
            <table>
                <thead>
                    <tr>
                        <th>Participant Caterogry</th>
                        <th>Overseas Participant</th>
                        <th>Domestic Participant</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Student (IEEE Member)</td>
                        <td>US$ 175</td>
                        <td>IDR 1,750,000</td>
                    </tr>
                    <tr>
                        <td>Student (Regular/Non IEEE Member)</td>
                        <td>US$ 200</td>
                        <td>IDR 2,000,000</td>
                    </tr>
                    <tr>
                        <td>Profesional (IEEE Member)</td>
                        <td>US$ 250</td>
                        <td>IDR 2,500,000</td>
                    </tr>
                    <tr>
                        <td>Profesional (Regular/Non IEEE Member)</td>
                        <td>US$ 275</td>
                        <td>IDR 2,750,000</td>
                    </tr>
                    <tr>
                        <td>Extra Paper (2nd, 3rd paper, etc)</td>
                        <td>US$ 175</td>
                        <td>IDR 1,750,000</td>
                    </tr>
                    <tr>
                        <td>Attendee (without paper)</td>
                        <td>US$ 25</td>
                        <td>IDR 250,000</td>
                    </tr>
                </tbody>
            </table>
            
            <article>
                <p>To be eligible for the IEEE member rate you must be an IEEE Member, please provide your IEEE Member Card.</p>
                <p>To be eligible for the student rate you must provide your student ID/Letter of proof. <b>The student must be the first author</b>.</p>
                <p>Extra paper rates apply if <b>the first author is the same person</b></p>
                <p>Please contact the Person in Charge on the website for further inquiries about excess funds.</p>
                <p>Registration payments are made via EDAS using a credit card at an exchange rate of US dollars.</p>
                <p>Confirmation is automatic because it uses the EDAS system. If your payment is successful, the status will change to PAID.</p>
                <a href="#">Click Here for Register Edas Info</a>

                <p>Registration Payment for International Participants can be made by bank transfer, with the following details:</p>

                <ul className="registrationList">
                    <li>Account Name: Universitas Muhammadiyah Jember</li>
                    <li>Name of Bank : Bank Syariah Indonesia</li>
                    <li>US Dollar Account Number: 72190XXXXXX</li>
                    <li>SWIFT CODE: TEMPCODE</li>
                </ul>

                <p>Registration Payment for Domestic Participants can be made by bank transfer, with the following details:</p>
                
                <ul className="registrationList">
                    <li>Name of Bank : Bank Syariah Indonesia</li>
                    <li>PT Beneficiary Name : UNIVERSITAS MUHAMMADIYAH JEMBER</li>
                    <li>Account number : 882 XXX XXX - X</li>
                </ul>

                <p>To make it easier to check, please add the last 3 digits of your id paper to the registration fee. Confirmation is manual, meaning you must inform and send proof of transfer at the link provided.</p>
                <a href="#">Click Here To Confirm Registration Payment</a>
            </article>        
        </section>
    )
}

export default Registration;