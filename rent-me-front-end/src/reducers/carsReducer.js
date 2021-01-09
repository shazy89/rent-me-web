export default (state={cars: [], bookingErrors: [], loading: true }, action) => {

    switch(action.type) {
        case "ADD_CARS":
            return {
               ...state, 
               cars:  action.cars ,
               loading: false };
       
        case "ADD_CAR":
            return {...state, 
                    cars: [...state.cars, action.car],
                    loading: false };
        case 'DELETE_CAR':
  
            let cars = state.cars.filter(car => car.id !== action.car.id )
            return {...state, cars: cars, loading: false };
                    

        case 'EDIT_CAR':
                  
            let cars1 = state.cars.map(car => {
                if(car.id === action.car.id) {
                    return action.car
                } else {
                    return car
                }
            }); 
            return {...state, cars: cars1,
                    loading: false };
                    
        case "ADD_BOOKING":
            
            let cars2 = state.cars.map(car => {
                if(car.id === parseInt(action.bookingData.car_id)){
                    return  car = { ...car, bookings: [...car.bookings, action.bookingData ] }
                   } else {
                       return  car
                   }
               })  
            return {...state, cars: cars2,
             loading: false };
        case "ADD_ERROR" :  

        return {
            ...state, 
            bookingErrors:  action.error,
              }; 

             default:
                 return state;
             }
           }
              

  
            
                             

            
                

                    
                    
  


     
          
