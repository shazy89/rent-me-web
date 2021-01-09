import React from 'react'
import { Row, Col, Preloader } from 'react-materialize';

const Loading = () => {
    return (
        <div>
             <Row className="center">
                <Col s={4}>
                    <Preloader   active color="blue" flashing={false} size="big" />
                  </Col>
                  <Col s={4}> 
                     <Preloader   active  color="blue"  flashing  />
                  </Col>
                  <Col s={4}>
                     <Preloader    active color="blue"  flashing={false} size="big" />
                  </Col>     
             </Row>
        </div>
    )
}
export default Loading;

