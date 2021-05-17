import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../StyleSheets/About.css";
import React from 'react'

const Developer = () => {
    return (
        <div id="developer">
        <Grid className="row" item xs={12} sm={12} md={12} lg={12}>
        <Typography
            style={{ fontSize: '43px', color: "#4a73b5", textAlign: 'center', marginBottom: '35px', borderBottom: '3px solid #10dac1', fontWeight: 600 }}
            >
            DEVELOPER
            </Typography>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="main__content">
          </div>
        </Grid>
        <div class="card2">
          <div class="card-header2">
          
          <img src="https://res.cloudinary.com/dwe7nnirb/image/upload/c_scale/w_200/v1614236058/pecquora/profileimage/akshayrr10/nv6kjlmyuujrw5hmbgi4.jpg" alt="Akshay RR" style={{ borderRadius: "50%", width: '140px'}}/>
          <div style={{margin: "10px 0px 0px 0px"}}> <Typography style={{ fontWeight: 600, fontSize: "20px"}} >Akshay R R</Typography></div>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://github.com/akshay1027/"
              target="_blank"
            >
              <GitHubIcon className="developer-icon" />
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.linkedin.com/in/akshayrr1027/"
              target="_blank"
            >
              <LinkedInIcon className="developer-icon" />
            </a>
          </div>
          <div class="card-body" id="developer">
                    <p style={{ fontSize: '17px'}}>
                    <div style={{ textAlign: 'center', fontWeight: '700', fontSize: '15px'}}>
                    19| Open source contributor| GFG Institute rank: 1| 5 ⭐ Hackerrank| Full stack developer| Footballer
                    </div>
                    <br />
                    <div style={{ textAlign: 'center', fontWeight: '700', fontSize: '15px'}}>
                    Ideation + Technology 🔰
                    </div>
                    </p>
         </div>
        </div>
      </Grid>
        </div>
    )
}

export default Developer
