import "./commitee.scss";


function Commitee() {
    return (
        <section className="section" id="commitee">
            
            <h3 className="sectionTitle">Commitee</h3>

            <ul className="commiteeList">
                <li className="commiteeItem">
                    <h4 className="name">Organizing Committee</h4>
                    <ul className="nameList">
                        <li className="nameItem"><b>General Chair</b>: Dr. Bagus Setya Rintyarna, S.T., M.Kom.</li>
                        <li className="nameItem"><b>Treasurer</b>: Triawan Adi Cahyanto, M.Kom.</li>
                        <li className="nameItem"><b>Secretary</b>: Hardian Oktavianto, S.Si., M.Kom.</li>
                        <li className="nameItem"><b>Technical Program Committee & Publication Chair</b>: Daryanto, M.Kom.</li>
                        <h5 className="subName">Editor</h5>
                            <li className="nameItem">Lintang Setyo Kurniawati, S.Kom., M.Pd.Kom</li>
                            <li className="nameItem">Habibatul Azizah Al Faruq, M.Pd.</li>
                            <li className="nameItem">Dasuki, S.Kom., M.Kom</li>
                        <h5 className="subName">Technical Team</h5>
                            <li className="nameItem">Lutfi Ali Muhaarom, M.Si.</li>
                            <li className="nameItem">Miftahurrahman, S.Kom</li>
                            <li className="nameItem">Ginanjar Abdurrahman, M.Pd</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Commitee;