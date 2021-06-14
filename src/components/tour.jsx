import React from "react";
import {Card, Button, Image} from "react-bootstrap";

const Tour = (tour) => {
  let {name, info, image, price} = tour;
  let imageStyle = {
    borderTopRightRadius: "0.5rem",
    borderTopLeftRadius: "0.5rem",
    objectFit: "cover",
    maxHeight: "25rem"
  };
  return (
    <>
      <Card style={{width: "18rem"}}>
        <Card.Img variant="top" src={image} style={imageStyle} />
        <Card.Body>
          <div>
            <Card.Title>{name}</Card.Title>
            <p className="price">${price}</p>
          </div>
          <Card.Text>{info}</Card.Text>
          <Button variant="outline-danger">Not Interested</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Tour;
