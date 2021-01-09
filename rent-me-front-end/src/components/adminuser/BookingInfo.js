import React from 'react';
import { connect } from 'react-redux';
import {  Table } from 'react-materialize';

const BookingInfo = ({cars, match }) => {

    const car = cars.find(car => car.id === parseInt(match.params.id, 10));
    const letsTry = {...car, bookings: car.bookings.map(booking => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return {...booking, startDate: new Date(booking.startDate).toLocaleDateString(undefined, options), endDate: new Date(booking.endDate).toLocaleDateString(undefined, options) }
    } ) };
   
       const tb = letsTry.bookings.map((booking, i )=> {
        return (
            <tr>
                <td>
                  {i + 1}
                </td>
            <td>
              {booking.firstName + ` ` + booking.lastName}
            </td>
            <td>
              {booking.emailAdress}
            </td>
            <td>
              {booking.phoneNumber}
            </td>
            <td>
              {  booking.startDate }
            </td>
            <td>
              { booking.endDate  }
            </td>
          </tr>
        )
       })

  return (
      <div  style={{width: '80%', marginLeft: '100px'}}>
          <Table>
  <thead>
    <tr>
      <th data-field="">
      </th>
      <th data-field="Customer">
       Customer
      </th>
      <th data-field="Email">
        Email
      </th>
      <th data-field="phoneNumber">
        Phone Number
      </th>
      <th data-field="pick-up">
        Pick Up
      </th>
      <th data-field="Return">
        Return
      </th>
    </tr>
  </thead>
  <tbody>
      { tb }
  </tbody>
</Table>
      </div>
  )
}
       
const mapStateToProps = carsReducer => {
    return {
        cars: carsReducer.cars.cars
    } 
}

export default connect(mapStateToProps)(BookingInfo);
    

