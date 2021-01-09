import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar, NavItem, Icon} from 'react-materialize'


const NavBar = (props) => {
 
return (
    <div>
  <Navbar alignLinks="right" className="fb8c00 orange darken-1" 
     brand={ <Link className='left' style={{marginLeft: '120px', fontFamily: 'Times New Roman'}} 
     to='/'><Icon >wb_sunny</Icon>RentMe</Link>  }  > 
     { props.loggedInStatus ? null : <Link to='/login'>Log In</Link> }
     { props.loggedInStatus ? null : <Link to='/signup'>Sign Up</Link> }
     { props.loggedInStatus ? <NavItem  onClick={props.handleLogOut}>Log Out </NavItem>  : null }
  </Navbar>
    </div>
  );
};
export default NavBar;
     

   
   
   
   

        
    
      
   
 
    
     




        
 
     
