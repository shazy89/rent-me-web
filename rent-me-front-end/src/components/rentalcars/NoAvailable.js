import React from 'react'
import {  Row, Col, Icon, Card  } from 'react-materialize';
import {Link} from 'react-router-dom'

const NoAvailable = () => {
    
return (
<div  id="card 1" className='center' style={{marginLeft: '35%' , marginTop: '100px'}}>
<Row>
  <Col 
     id="card col"
    m={6}
    s={12}
  >
    <Card
       id="card"
      actions={[
        <Link to='/'>Home Page</Link>,
      ]}
      style={{fontFamily: 'Times New Roman'}}
      className="blue-grey darken-1"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="white-text"
      title="Card title"
    >
      No available cars for your dates please try another date
    </Card>
  </Col>
</Row>
   
  </div>
  )
};

export default NoAvailable;