import React from "react";
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';




function Navbar() {



    //daha sonra current userid'yi alarak yapacagiz.
    let userId = 5;

    return(
        <div> 
             <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>  
          
          <Link style={{ 
            textDecoration: 'none',
            boxShadow : "none",
            color : "white"}} sx={{ flexGrow: 1}} to ="/">
               Home
              </Link>
              
          </Typography>
          

          <Button color="inherit">Login</Button>
          <Link style={{ 
            textDecoration: 'none',
            boxShadow : "none",
            color : "white"}} to ={{pathname : '/users/' + userId}}>User</Link>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
}

export default Navbar;   