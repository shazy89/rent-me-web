import React from 'react'
import CarCard from '../../containers/CarCard';
import {connect} from 'react-redux';
import { deleteCarCards } from '../../actions/carActions';
import {  Row } from 'react-materialize';
import NoAvailable from './NoAvailable'



const CarList = ({ fetchCars, deleteCarCards, loggedInStatus, bookStartDate, bookEndDate  }) => {

  // create array with selected dates 
  const getSearchDates = (stDate, endDate ) => {
      let std = new Date(stDate)
      let end = new Date(endDate)
      let days = []
      let daysInTime = end.getTime() - std.getTime();
      let totalDays = daysInTime / (1000 * 3600 * 24);
      for (let i = 0; i < Math.ceil(totalDays); i++){
        let nextDay = new Date(stDate)
        nextDay.setDate(nextDay.getDate() + i)

          days = [...days, nextDay]
      }
      return days
   } 
      

  // compare selected dates and booking dates
 const compare = (arr1, arr2) => {

        const finalArray = []
        arr1.forEach(e1 => arr2.forEach(e2 =>
          {if (e1.getTime() === e2){
            finalArray.push(e1)
          } 
        } 
     ) )
          return finalArray
  }
          
// check for available cares for rent 
  const handleCarList = fetchCars => {

        let condition = fetchCars.map(car => car.bookings).flat();
        if(condition.length !== 0){
           let dates = getSearchDates(bookStartDate, bookEndDate).map(date =>  date.getTime());
                   
           let bookings = fetchCars.map(car => {
             return  car.bookings.filter(booking => {   
              return compare(getSearchDates(booking.startDate, booking.endDate), dates).flat().length !== 0
             })     
          });    
          let bookingIds = bookings.map(booking => {
            if(booking.length !== 0){
              return parseInt(booking[0].car_id)}
            else {return booking}} );

            let listCars =  fetchCars.filter(car => !bookingIds.flat().includes(car.id));

            return listCars
            } else {
            return fetchCars
         }
     };
             
 
         // create a car card or render not available template
    let carList;
        if(loggedInStatus){
          
          carList = fetchCars.map( car => <CarCard key={car.id} car={car} deleteCarCards={deleteCarCards} loggedInStatus={loggedInStatus} /> )
        } else {
          if (handleCarList(fetchCars).length === 0) {
                return (
                  <div> <NoAvailable /></div>
                )
          } else {
          carList = handleCarList(fetchCars).map( car => <CarCard key={car.id} car={car} deleteCarCards={deleteCarCards} loggedInStatus={loggedInStatus}  /> )
        }
     };
       
        
       return (
           <div className="container">
             <Row>
               { carList } 
             </Row>
           </div>
       )
     }
     
     export default connect(null, {  deleteCarCards })(CarList);
     
 
            
    
  
        

   
         
             
 


  
            

     
    

 
    
       
          
     
         

     
  

  



   
  


  
 
 
 


