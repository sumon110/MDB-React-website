import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <div className="container">
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">COMPANY</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Press</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Work Here</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Legal</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">PRODUCTS</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Teams</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Talent</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Engagement</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Enterprise</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;