import React, {useState, useEffect} from "react";
import {Card, Button} from "react-bootstrap";

const Tour = (tour) => {
  //#region variables
  let {id, name, info, image, price} = tour;
  let truncatedText = info.substring(0, 300);
  let imageStyle = {
    borderTopRightRadius: "0.5rem",
    borderTopLeftRadius: "0.5rem",
    objectFit: "cover",
    maxHeight: "25rem"
  };
  let cardText_HtmlID = `tour-description${id}`;
  //#endregion

  //#region useState
  let [textDescription, setTextDescription] = useState(info);
  let [isDescriptionTruncated, setIsDescriptionTruncated] = useState(false);
  //#endregion

  //#region useEffect
  useEffect(() => {
    checkTextLength();
  }, []);
  //#endregion

  //#region functions
  const checkTextLength = () => {
    if (info.length > 300) {
      setTextDescription(truncatedText);
      setIsDescriptionTruncated(true);
    }
  };

  const showHideDescription = () => {
    if (textDescription.length === 300) {
      setTextDescription(info);
      setIsDescriptionTruncated(false);
    } else {
      setTextDescription(truncatedText);
      setIsDescriptionTruncated(true);
    }
  };
  //#endregion

  //#region component render method
  return (
    <>
      <Card style={{width: "18rem"}}>
        <Card.Img variant="top" src={image} style={imageStyle} />
        <Card.Body>
          <div>
            <Card.Title>{name}</Card.Title>
            <p className="price">${price}</p>
          </div>
          <Card.Text id={cardText_HtmlID}>
            {textDescription}
            {isDescriptionTruncated && "..."}
            <span id="showMoreLess-Btn" onClick={showHideDescription}>
              <b className="showMoreLessBtn">
                {" "}
                {isDescriptionTruncated ? "Read More" : "Show Less"}
              </b>
            </span>
          </Card.Text>
          <Button variant="outline-danger">Not Interested</Button>
        </Card.Body>
      </Card>
    </>
  );
  //#endregion
};

export default Tour;
