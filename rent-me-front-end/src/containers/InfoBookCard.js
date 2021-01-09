import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';


const InfoBookCard = ({ car, startDate, endDate }) => {

    const [totalCost, setTotalCost] = useState("")
    const [totalBookDays, setTotalBookDays] = useState("")

const handleTotalCoast = () => {
    let daysInTime = endDate.getTime() - startDate.getTime();
    let totalDays = daysInTime / (1000 * 3600 * 24);
    let total = Math.ceil(totalDays) * car.rentPrice
    setTotalCost(total)
    setTotalBookDays(totalDays)
}
useEffect(() => {
    handleTotalCoast()
})
return (
    <div>
        <Row>
          <Col
            m={6}
            s={12}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={car.img} />}
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
                <h4>{`${car.make} - ${car.model}`}</h4>
                <p>{`${car.vehicleType}`}</p>
                <p>{`capacity: ${car.capacity}`}</p>
                <p>{`Bags: ${car.baggingCapacity}`}</p>
                <p>Total Days: {totalBookDays}</p><br/>
                <p>{startDate.toDateString()}</p>
                <p>{endDate.toDateString()} </p>
                <h6>Estimated Total <span className="right"><h5>$ {totalCost}.00</h5></span> </h6>
             
            </Card>
          </Col>
        </Row>
     
    </div>
)
}

export default InfoBookCard;


