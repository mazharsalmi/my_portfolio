import React from 'react'
import { useStyles } from '../../CSS/ProfileStyle'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, Grid } from '@mui/material';
import pic from "../../Imges/myfb.jpg"
import animetion from "../../Imges/download.png"
export default function Profile(props) {
    const classes = useStyles();
  return (
      <div className={classes.profilecontainer}>
          <div className={classes.profileparent}>
              <div className={classes.profiledetails}>
                  <Grid container spacing={2} style={{alignItems:'center'}}>
            <Grid item xs={8} md={6}>
                          <div className={classes.colz}>
                              <div className={classes.pic1} >
                                  <img src={pic} alt="pic" className={classes.pic} /></div>
                              <h2>Front End Developer </h2>
                  <Link href="https://www.facebook.com/" className={classes.link} target="_blank" >
                                  <FacebookIcon className={ classes.asdf}/>
                      </Link> 
                  <Link href="http://www.google.com" className={classes.link} target="_blank" >
              <GoogleIcon className={ classes.asdf}/>
                      </Link> 
                  <Link href="https://www.instagram.com/?hl=en#reactivated" className={classes.link} target="_blank" >
              <InstagramIcon className={ classes.asdf}/>
                      </Link> 
                  <Link href="https://www.linkedin.com/feed/" className={classes.link} target="_blank" >
              <LinkedInIcon className={ classes.asdf}/>
                      </Link> 
                  <Link href="https://github.com/" className={classes.link} target="_blank" >
              <GitHubIcon className={ classes.asdf}/>
                  </Link>     
                  </div>
                  <div className={classes.profiledetailsname}>
                      <span className={classes.primarytext}>
                          {" "}
                      Hello, I'M <span  className={classes.highlightedtext}>Mazhar Iqbal</span> 
                      </span>
                      <h3>{props.date}</h3>
                  </div>
 
</Grid>
 <Grid item xs={8} md={6}>
                          <img src={animetion} alt="" className={classes.animation}/>
  </Grid>
  </Grid>
                   </div>
          </div> 
      </div>
  )
}
