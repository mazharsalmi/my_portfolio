import React from 'react'
import { useStyles } from '../../CSS/ProfileStyle'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import {Link } from '@mui/material';
export default function Profile() {
    const classes = useStyles();
  return (
      <div className={classes.profilecontainer}>
          <div className={classes.profileparent}>
              <div className={classes.profiledetails}>
                  <div className={classes.colz}>
                  <Link href="https://www.facebook.com/" className={classes.link} target="_blank" >
              <FacebookIcon/>
                      </Link> 
                  <Link href="http://www.google.com" className={classes.link} target="_blank" >
              <GoogleIcon/>
                      </Link> 
                  <Link href="https://www.instagram.com/?hl=en#reactivated" className={classes.link} target="_blank" >
              <InstagramIcon/>
                      </Link> 
                  <Link href="https://www.linkedin.com/feed/" className={classes.link} target="_blank" >
              <LinkedInIcon/>
                      </Link> 
                  <Link href="https://github.com/" className={classes.link} target="_blank" >
              <GitHubIcon/>
                  </Link>     
                  </div>
                  <div className={classes.profiledetailsname}>
                      <span className={classes.primarytext}>
                          {" "}
                      Hello, I'M <span  className={classes.highlightedtext}>Mazhar Iqbal</span> 
                      </span>
                  </div>
              </div>
          </div> 
      </div>
  )
}
