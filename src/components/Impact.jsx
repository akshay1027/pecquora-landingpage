import React from 'react'
import Grid from "@material-ui/core/Grid";
import "../StyleSheets/About.css";
import "../StyleSheets/About.css";
import Typography from "@material-ui/core/Typography";

const Impact = () => {
    return (
        <div id="impact">
        <Grid container className="main" id="about" style={{justifyContent: 'center', paddingTop: '50px'}}>
        <Typography
            style={{ fontSize: '43px', color: "#4a73b5", marginBottom: '35px', borderBottom: '3px solid #10dac1', fontWeight: 600, display: 'flex', justifyContent: 'center' }}
            >
            OUR IMPACT
            </Typography>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid class="row">
          <div class="card2" style={{ marginTop: '50px'}}>
                <div class="card-header2">
                <div style={{margin: "10px 0px 0px 0px"}}><Typography style={{ fontWeight: 600, fontSize: "18px"}} >PEC QUORA:</Typography></div>
                </div>
                <div class="card-body" id="developer">
                    <p style={{ fontSize: '17px'}}>
                    <div style={{ textAlign: 'center', fontWeight: '700', fontSize: '16px'}}>
                        Ask Questions | Get answers | Career Guidance | Community | Innovate and New ideas | Search for Questions | earn and Improve
                    </div>
                    <br />
                    <a
              style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: 'space-around' }}
              href="https://pec-forum.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="redirect1">Start Now</button>
            </a>
                    </p>
                </div>
                </div>
                
                <div class="card2" style={{ marginTop: '50px'}}>
                <div class="card-header2">
                <div style={{margin: "10px 0px 0px 0px"}}><Typography style={{ fontWeight: 600, fontSize: "18px"}} >PEC CONNECT:</Typography></div>
                </div>
                <div class="card-body" id="developer">
                    <p style={{ fontSize: '17px'}}>
                    <div style={{ textAlign: 'center', fontWeight: '700', fontSize: '16px'}}>
                    Connect with Industry Experts | Search With Username | Search Dept. Wise | Personal Guidance | Find like minded people | Find Opportunities
                    </div>
                    
                    <br />
                    <a
              style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: 'space-around' }}
              href="https://pec-forum.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="redirect1">Start Now</button>
            </a>
                    </p>
                </div>
                </div>
                </Grid>
                <div className="main__content">
            <h2 style={{ textAlign: 'center', marginTop: '-20px'}}>
               This project is made with MERN stack and is Open sourced.
              <br />
              Here is the code, star the repo ♥ 
            </h2>
            <br />
            <a
              style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: 'space-around' }}
              href="https://github.com/akshay1027/pecquora"
              rel="noreferrer"
              target="_blank"
            >
              <button className="redirect">Github repo</button>
            </a>
          </div>
        </Grid>
        </Grid>
        </div>
    )
}

export default Impact
