import React, { Component } from 'react';
import ComponentsNavbar from './ComponentsNavbar';
import Footer from './Footer';
import AluminiTeamData from '../JsonFolder/AluminiTeamData'
class AluminiTeam extends Component {
  render() {
    return (
      <div>
        <ComponentsNavbar />
        <br />
        <br />
        <br />
        <br />
        <h1 className="aluminiTitle">Alumini Team</h1>
        <div className="container">
          <div className="row">
            {AluminiTeamData.map((alumini) => {
              return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card cardDiv" >
                  <img className="card-img-top aluminiImage" src={alumini.image} alt={alumini.altText}></img>
                  <div className="card-body">
                    <h5 className="card-title">{alumini.aluminiName}</h5>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
        <Footer position="sticky" bottom="0px" left="0px" right="0px" />
      </div>
    );
  }
}
export default AluminiTeam;