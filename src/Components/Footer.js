import React from "react";
import {FaInstagram, FaFacebook, FaTwitter, FaGoogle} from 'react-icons/fa';

const style={
    'color': '#ffff',
    'margin-left': '15px'
}

const FooterPage = () => {
  return (
    <footer className="page-footer font-small pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Plant Growth System</h5>
          <p>&copy; Shenkar Software Engineering Department</p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-3"></hr>
        <div className="col-md-5 mb-md-0 mb-3">
            <div className="form-row">
              <a href="#"><FaFacebook size='23' style={style}/></a>
              <a href="#"><FaInstagram size='23' style={style}/></a>
              <a href="#"><FaTwitter size='23' style={style}/></a>
              <a href="#"><FaGoogle size='23' style={style}/></a>
            </div>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default FooterPage;