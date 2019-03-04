import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import CarouselPage from './CarouselPage';
import ChartsPage from './ChartsPage'
import ChartsPage1 from './RadarChart'
import  NavbarPage from './MenuBar'
import CardExample from './Card'

import FooterPage from './Footer'

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <NavbarPage/>
        <CarouselPage/>
        <div className="row py-5">
           <div className="col-md-4"> <CardExample/> </div>
           <div className="col-md-4"> <CardExample/> </div>
           <div className="col-md-4"> <CardExample/> </div>
        </div>
         <div className="row py-5">
            <div className="col-md-6">
           <ChartsPage/>
             </div>
            <div className="col-md-6">
               <ChartsPage1/>
             </div>
        </div>

        <FooterPage/>
      </MDBContainer>
    );
  }
}

export default App;
