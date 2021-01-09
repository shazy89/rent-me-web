import React, { useState } from 'react'
import {  Icon, TextInput, Select } from 'react-materialize'
import { createCar } from '../../actions/carActions';
import { connect } from 'react-redux';


const CarForm = ({createCar, history, erorors }) => {
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [vehicleType, setvehicleType] = useState("")
    const [capacity, setCapacity] = useState("")
    const [baggingCapacity, setBaggingCapacity] = useState("")
    const [rentPrice, setRentPrice] = useState("")
    const [img, setImg] = useState("")
    const [errMsg, setErrMsg] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [previewSource, setPreviewSource] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setImg(e.target.value);
    };


    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSource(reader.result);
      };
  };
      
  const handleSubmit = e => {
      e.preventDefault();

      if (!selectedFile) return;
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      const car = {
          car: {make, model, vehicleType, capacity, baggingCapacity, rentPrice, reader}
      }
      reader.onloadend = () => {
          createCar(car, history);
      };
      reader.onerror = () => {
          console.error('AHHHHHHHH!!');
          setErrMsg('something went wrong please  try again!');
      };
      setMake("")
      setModel("")
      setvehicleType("")
      setCapacity("")
      setBaggingCapacity("")
      setRentPrice("")
      setImg()
      setSelectedFile()
  }
  const  errorList =  erorors.map(error => {
    return <li style={{color: "red"}} key={error}>{error}</li>
    })

    return (
        <div className='container'>
           <div>
             <ul>
               {erorors ? errorList : null}
            </ul>
           </div>  
        <form onSubmit={ handleSubmit }>
      
      <TextInput
        placeholder="Make"
        type="text"
        name="make"
        value={make}
        onChange={ e => setMake(e.target.value)}
      />

      <TextInput
        placeholder="Model"
        type="text"
        name="model"
        value={model}
        onChange={e => setModel(e.target.value)}
      />
 <Select
    id="Select-9"
    onChange={e => setvehicleType(e.target.value)}
    name="vehicleType"
    multiple={false}
    options={{
      classes: '',
      dropdownOptions: {
        alignment: 'left',
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        coverTrigger: true,
        hover: false,
        inDuration: 150,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 250
      }
    }}
    value={vehicleType}
  >
  <option
      disabled
      value=""
    >
      Choose your option
    </option>
    <option value="Compact Car">
      Compact Car
    </option>
    <option value="Suv">
      Suv
    </option>
    <option value="Luxury Car">
     Luxury Car
    </option>
 </Select>
    
    <TextInput inputClassName='input-field col s6'
        placeholder="Capacity"
        type="text"
        name="capacity"
        value={capacity}
        onChange={e => setCapacity(e.target.value)}
        />
      <TextInput
        placeholder="BaggingCapacity"
        type="text"
        name="baggingCapacity"
        value={baggingCapacity}
        onChange={e => setBaggingCapacity(e.target.value)}
        />
      <TextInput
        placeholder="RentPrice"
        type="text"
        name="rentPrice"
        value={rentPrice}
        onChange={e => setRentPrice(e.target.value)}
        />
      <TextInput
        id="TextInput-4"
        label="ADD IMG"
        type="file"
        name="img"
        onChange={handleFileInputChange}
        value= {img}
        />
       {previewSource && (
            <img 
            src={previewSource}
            alt="chosen"
            style={{ height: '100px' }}
            />
        )}
      <div>
      <button placeholder="submit" type="submit"  
         node="button"
         waves="light"
         className="waves-effect orange btn"
         ><Icon right> check</Icon>
           Submit
       </button>
       </div>
     </form>
           
       </div>
   )
}
   const mapStateToProps = carsReducer => {
    return {
      erorors: carsReducer.cars.bookingErrors
     }
   };
      
   export default connect(mapStateToProps, { createCar })(CarForm);
         
           
          
 
      

    
    
          

  
      

  

