import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchCars } from './actions/carActions';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import NavBar from './containers/NavBar';
import CarForm from './components/rentalcars/CarForm';
import AdminNavBar from './components/adminuser/AdminNavBar';
import CarList from './components/rentalcars/CarList';
import CarEdit from './components/rentalcars/CarEdit';
import Booking from './components/bookings/Booking';
import { connect } from 'react-redux';
import SearchCars from './containers/SearchCars';
import Loading from './containers/Loading'
import BookingInfo from './components/adminuser/BookingInfo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  };
  
  componentDidMount() {
      this.loginStatus()
      this.props.fetchCars()
    };
  
  loginStatus = () => {
      axios.get('http://localhost:3001/logged_in')
      .then(response => {  
        if (response.data.logged_in) {
          this.handleLogin(response.data)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
    };
  
  handleLogin = (data) => {
    
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  };
  
  handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
    };
      
  
    handleLogOut = () => {
      axios.delete('http://localhost:3001/logout')
      .then(response => {
        this.handleLogout()
        this.history.push('/')
      })
      .catch(error => console.log(error))
    };
  
    render() {
        return (
          <div >
          <BrowserRouter>
  
             < NavBar {...this.props} handleLogOut={this.handleLogOut} loggedInStatus={this.state.isLoggedIn} />
             { this.state.isLoggedIn ? <AdminNavBar loggedInStatus={this.state.isLoggedIn}/> : null}
             <Switch>
             <Route exact path="/"
                render={props => ( this.props.loading ? <Loading /> :
                 <SearchCars {...props} cars={this.props.cars}  loading={this.props.loading} loggedInStatus={this.state.isLoggedIn}/>
                )} /> ;
  
             <Route exact path='/carlist' 
                 render={props => ( 
                  <CarList {...props} fetchCars={this.props.cars} loading={this.props.loading} 
                   loggedInStatus={this.state.isLoggedIn} bookStartDate={this.props.startDate} bookEndDate={this.props.endDate}/> 
                   )} />;
          
              <Route exact path='/login' 
               render={props => (
                 <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
               )} />;
              
              <Route exact path='/signup' 
               render={props => (
                 <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
               )} />;
             
              <Route exact path='/cars/:id/edit'  
                 render={props => ( this.props.loading ? <Loading /> : <CarEdit {...props} fetchCars={this.props.cars} loggedInStatus={this.state.isLoggedIn}/>
                   )}   /> ;
               
              <Route exact path='/cars/:id/book'  
                 render={props => ( this.props.startDate ?  
                 <Booking {...props} fetchCars={this.props.cars} bookStartDate={this.props.startDate} 
                 bookEndDate={this.props.endDate} loggedInStatus={this.state.isLoggedIn}/> :
                 <SearchCars {...props}  loggedInStatus={this.state.isLoggedIn}/>
                 )} />;
           
              <Route exact path='/cars/:id/info'  
                  render={props => (this.props.loading ? <Loading /> : <BookingInfo {...props} loggedInStatus={this.state.isLoggedIn}/>
                    )} />;
              <Route exact path='/cars/new' component={ CarForm } />;
          </Switch>
          </BrowserRouter>
            </div>
      
           );
         }
       };
       const mapStateToProps = carsReducer => {
         return {
           cars: carsReducer.cars.cars,
           loading: carsReducer.cars.loading,
           startDate: carsReducer.dates.startDate,
           endDate: carsReducer.dates.endDate
          }
         };
     
        export default connect(mapStateToProps, {fetchCars})(App);
                  
     

      
  
        
        
           
       

       

    
          
  
   
               

  


  

          
   




    




      


