import React from "react";
import Grid from "@material-ui/core/Grid";
import "../StyleSheets/About.css";
import { ReactComponent as ReactLogo } from "../images/data.svg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div id="home">
      <Grid container className="main" id="about">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="main__content" id="hero">
            <h2>
              <h1>PEC FORUM</h1>
              <br />
              <h4>Building An Exclusive Community</h4>
              <h4>of PEC Graduates and Students</h4>
            </h2>
            <br />
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="impact"
                duration={1000}
                smooth={true}
            >
              <button className="redirect">Our Impact!</button>
            </Link>
            <h2 style={{ marginTop: "10px" }}>
              <h4>Scroll down to know more ⬇</h4>
            </h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="main-img-container">
            <ReactLogo className="illustration" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
