import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar , Toolbar ,Typography ,Button } from '@material-ui/core'
import { Link  } from "react-router-dom";
// import { MenuIcon} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      padding:10    
    },
  }));

const Header = () =>{
    const classes = useStyles();
    return (
      <AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h4" color="inherit" className={classes.title}>
      Stalker
    </Typography>
    
    <div > 
     
     <Button color="inherit"> 
      <Link to="/" style={{ textDecoration: "none", color:'white', width: "100%" }} >
                   Home
       </Link> 
     </Button>
     <Button color="inherit"> 
      <Link to="/compare" style={{ textDecoration: "none", color:'white', width: "100%" }} >
                   Compare
       </Link>
     </Button>
     <Button color="inherit"> 
       <Link to="/" style={{ textDecoration: "none", color:'white', width: "100%" }} >
                   About
       </Link>
       </Button>
    </div>
  </Toolbar>
</AppBar>
    )
}

export default Header;