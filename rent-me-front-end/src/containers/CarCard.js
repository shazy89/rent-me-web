import React, { useState }  from 'react'
import {  Col, Card, Icon, CardTitle, Button} from 'react-materialize'
import {Link} from 'react-router-dom'



const CarCard = ({ car, deleteCarCards, loggedInStatus}) => {
     
  const handleDelete = () => {
   deleteCarCards(car.id)
     }
    
   return (
   <Col m={4} s={8} l={4} >
 
     <Card
       closeIcon={<Icon>close</Icon>}
       header={<CardTitle image={car.img} reveal waves="light"/>}
       reveal={
           <>
              <ul>
                <li>Model {car.model}  </li>
                <li> {car.vehicleType} </li>
                <li>{<Icon>person</Icon>}{car.capacity} People </li>
                <li>{<Icon>work</Icon>}{car.baggingCapacity} Bags</li>
              </ul>
              <>
               <h5 className="right e0e0e0 grey lighten-2">{<Icon>attach_money</Icon>} {car.rentPrice} per day</h5>
               </>
               <>
              { loggedInStatus ? <Button className="yellow right"  node="a" small  style={{margin: '10px'}}   waves="light"    >
                 <Link  to={`/cars/${car.id}/edit`}>Edit </Link>
               </Button> : null }
 
              { loggedInStatus ? <Button className="red right"  onClick={handleDelete} node="a" small  style={{margin: '10px'}}   waves="light"    >
                Delete
               </Button> : null }
 
               { loggedInStatus ? <Button className="blue right"  node="a" small  style={{margin: '10px'}}   waves="light"    >
                 <Link style={{color: 'white'}} to={`/cars/${car.id}/info`}> Booking Info </Link>
               </Button> : null }
 
               { loggedInStatus ? null : <Button style={{  marginTop: '70px' }} className={'ffa726 orange lighten-1'} >
                   <Icon right>drive_eta</Icon><Link to={`/cars/${car.id}/book`}>RentME </Link> </Button>
               }  
             </>
          </>
           }
            revealIcon={<Icon>more_vert</Icon>}
            title= {car.make } 
            >
        </Card>
     </Col>
    )
  }
   
  export default CarCard;


  
  

                 
            
              
  
  
          
          
       
                        
           
                        
    
                          
                     
                        
                    
                      




 



