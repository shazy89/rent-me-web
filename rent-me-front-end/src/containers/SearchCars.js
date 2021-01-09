import React, { useState } from 'react';
import { DatePicker, Icon, Button, Carousel } from 'react-materialize';
//import { Link } from 'react-router-dom'
import { addStartDate, addEndDate } from '../actions/dateActions'
import { connect } from 'react-redux';

const SearchCars = (props) => {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [nextDay, setNextDay] = useState()

const stDate = (e) => {
  e.preventDefault()
  props.addStartDate(startDate, props.history)
  props.addEndDate(endDate, props.history)

}

const startDateSearch = (e) => {
  setStartDate(e)
  selectNextDay(e)
}
  
const selectNextDay = (startDate) => {
  let day = new Date(startDate)
      day.setDate(day.getDate() + 1)
    
   return setNextDay(day)
}

const carImgs = props.cars.map(car => car.img)

   return (
     
     <div className="container">
    <h2 className="z-depth-1 center" style={{fontFamily: 'Times New Roman'}}> RESERVE A VEHICLE</h2>
  <div className="center">
  
  <DatePicker 
   onChange={ e => startDateSearch(e)}  
   
   className="center"     
   style={{width: '20%', fontFamily: 'Times New Roman'}}
   id="DatePicker-4"
   options={{
    autoClose: false,
    container: null,
    defaultDate:  startDate,
    disableDayFn: null,
    disableWeekends: false,
    events: [],
    firstDay: 0,
    format: 'mmm dd, yyyy',
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      nextMonth: '›',
      previousMonth: '‹',
      weekdays: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      weekdaysAbbrev: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
      ],
      weekdaysShort: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ]
    },

    isRTL: false,
    maxDate: null,
    minDate: new Date(),
    onChange: null,
    onClose: null,
    onDraw: null,
    onOpen: null,
    onSelect: null ,
    parse: null,
    setDefaultDate: true,
    showClearBtn: false,
    showDaysInNextAndPreviousMonths: false,
    showMonthAfterYear: false,
    yearRange: 2
 
  }}
> PICK-UP<Icon >date_range</Icon> </DatePicker>
 <DatePicker

    onChange={ e => setEndDate(e)}  
    className="center"
    style={{width: '20%', fontFamily: 'Times New Roman'}}
    id="DatePicker-5"

    options={{
    autoClose: false,
    container: null,
    defaultDate: endDate,
    disableDayFn: null,
    disableWeekends: false,
    events: [],
    firstDay: 0,
    format: 'mmm dd, yyyy',
    i18n: {
     cancel: 'Cancel',
     clear: 'Clear',
     done: 'Ok',
     months: [
       'January',
       'February',
       'March',
       'April',
       'May',
       'June',
       'July',
       'August',
       'September',
       'October',
       'November',
       'December'
     ],
     monthsShort: [
       'Jan',
       'Feb',
       'Mar',
       'Apr',
       'May',
       'Jun',
       'Jul',
       'Aug',
       'Sep',
       'Oct',
       'Nov',
       'Dec'
     ],
     nextMonth: '›',
     previousMonth: '‹',
     weekdays: [
       'Sunday',
       'Monday',
       'Tuesday',
       'Wednesday',
       'Thursday',
       'Friday',
       'Saturday'
     ],
     weekdaysAbbrev: [
       'S',
       'M',
       'T',
       'W',
       'T',
       'F',
       'S'
     ],
     weekdaysShort: [
       'Sun',
       'Mon',
       'Tue',
       'Wed',
       'Thu',
       'Fri',
       'Sat'
     ]
    },
    isRTL: false,
    maxDate: null,
    minDate: nextDay ,
    onClose: null,
    onDraw: null,
    onOpen: null,
    onSelect: null,
    parse: null,
    setDefaultDate: true,
    showClearBtn: false,
    showDaysInNextAndPreviousMonths: false,
    showMonthAfterYear: false,
    yearRange: 2
    }}
    >RETURN <Icon >date_range</Icon> </DatePicker>
    </div> 
    <div>
        
  {startDate && endDate ? <Button  className="right 009688 teal" onClick={e => stDate(e)} style={{color: 'white', fontFamily: 'Times New Roman'}} >  Check Availability</Button> : 
   <Button disabled className="right 009688 teal" onClick={e => stDate(e)} style={{color: 'white', fontFamily: 'Times New Roman'}} >  Check Availability</Button>}
     </div>
      <div>
      <Carousel
         carouselId="Carousel-2"
         images= { carImgs }
         options={{
           dist: -100,
           duration: 200,
           fullWidth: false,
           indicators: false,
           noWrap: false,
           numVisible: 5,
           onCycleTo: null,
           padding: 0,
           shift: 0
         }}
            /> 
      </div> 
 
</div>
    )
    
}

export default connect(null, { addStartDate, addEndDate })(SearchCars);
 



