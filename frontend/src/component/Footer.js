import { MDBFooter } from "mdb-react-ui-kit";

import React from "react";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div className="text-center p-3 " style={{ background: "black" }}>
        <p style={{ color: "white" }}>Copy Right Reserved 2023</p>
      </div>
    </MDBFooter>
  );
}

export default Footer;
