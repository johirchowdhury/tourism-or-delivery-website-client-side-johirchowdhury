import React from 'react';

const OurTeam = () => {
    return (
        <div className="container my-4">
            <h2>Our Team</h2>
            <div className="row">
                <div className="card col-md-4">
                    <img src="https://daffodilvarsity.edu.bd/images/alumni/fe8adfbf94ff31fd047619bc0035b721.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            <b> MD. Abul Kalam Azad</b><br />
                            CEO, Obokash.com
                        </p>
                    </div>
                </div>
                <div className="card col-md-4">
                    <img src="https://daffodilvarsity.edu.bd/images/alumni/fda65b180f673ea82329b77f6fbd87fd.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            <b>Mr. Ajgor Hossoin Bhuiyan</b><br />
                            Head of Marketing, Obokash.com
                        </p>
                    </div>
                </div>
                <div className="card col-md-4">
                    <img src="https://daffodilvarsity.edu.bd/images/alumni/e942184002a3ee256ef4e86c41d111c8.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            <b>Johir Ahammod Chowdhury</b><br />
                            Web Developer, Obokash.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;