import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { BorderColorTwoTone } from '@mui/icons-material';
import { margin } from '@mui/system';

export const  useStyles = makeStyles({
  profile: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  profiledetails: {
    backgroundColor: '#b59c7b',
    height: '100vh',
    
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: 'width',
    justifyContent:'center'
  },
  pic:{
    width: '17rem',
   borderRadius:'50%',
    height: '17rem',
    borderStyle: 'dashed',
    borderColor:'white'
  },
  pic1: {
    width: '100%',
    height: '100%',
    borderRadius:'50%',
  },
  animation: {
    width: 'auto',
    height:'auto',
  },
  asdf: {
    color: 'black',
    background: 'white',
    margin:'0rem 5px',
  }

});
