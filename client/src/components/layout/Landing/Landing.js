import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import Background from "../../Navigation/images/back.jpeg";

class Landing extends Component {
  render() {
    return (

      <div className="container mx-auto">
        <Jumbotron className="mt-5"
          style={{
            background: `url(${Background})`,
          }}>
          {/* <img src={logo} class="d-block" alt="Logo" style={{ width: "120px" }} /> */}
          <h1 className="display-3"
            style={{
              fontWeight: "bold"
            }}>HP Banking</h1>
          <p className="lead">Believing, banking and achieving different</p>
          <hr className="my-2" />
          <p>Please click below to login</p>
          <p className="lead">
            <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Landing;