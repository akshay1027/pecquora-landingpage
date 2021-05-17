import React from 'react'
import Grid from "@material-ui/core/Grid";
import "../StyleSheets/About.css";
import SecurityIcon from "@material-ui/icons/Security";
import StorageIcon from "@material-ui/icons/Storage";
import DomainDisabledIcon from "@material-ui/icons/DomainDisabled";
import Typography from "@material-ui/core/Typography";

const Features = () => {
    return (
        <div id="feature"> 
        <Grid class="row">
        <Typography
            style={{ fontSize: '43px', color: "#4a73b5", marginBottom: '35px', borderBottom: '3px solid #10dac1', fontWeight: 600, display: 'flex', justifyContent: 'center' }}
            >
            FEATURES
            </Typography>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="main__content">
          </div>
        </Grid>
        <div class="card">
          <div class="card-header">
            <h4>Frontend:</h4>
            <DomainDisabledIcon className="card-icon" />
          </div>
          <div class="card-body">
            <p>
              <ul>
                <li> Asking Questions</li>
                <li> Answering asked Questions</li>
                <li>Up voting Questions and Answers</li>
                <li> Find people: username and dept. wise</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h4 style={{ fontSize: "25px" }}>Authentication:</h4>
            <SecurityIcon className="card-icon" />
          </div>

          <div class="card-body">
            <p>
              <ul>
                <li>Sign In</li>
                <li>Sign Up</li>
                <li>Profile Image uploads</li>
                <li>Server-Side cookies handling</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h4>Backend:</h4>
            <StorageIcon className="card-icon" />
          </div>
          <div class="card-body">
            <p>
              <ul>
                <li>REST API Architecture</li>
                <li>No SQL Database Modal</li>
                <li>Hashing of passwords</li>
                <li>Storing profile images</li>
              </ul>
            </p>
          </div>
        </div>
      </Grid>
        </div>
    )
}

export default Features;
