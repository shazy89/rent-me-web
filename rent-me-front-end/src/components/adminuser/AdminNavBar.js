import React from 'react'
import { Breadcrumb } from 'react-materialize'
import {Link} from 'react-router-dom'


const Admin = () => {
 return (
  <div>
    <Breadcrumb cols={12} className="teal orange"  >
  
     <Link to='/cars/new'>Create Car</Link>
     <Link to='/carlist'>Car List</Link> 
  
   </Breadcrumb>
    
  </div>
 )
}
export default Admin;

          




