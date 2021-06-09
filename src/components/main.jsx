import React, {useState, useEffect} from "react";
import {courseAPI} from "../config/constants";
import Header from "./header";
import ToursList from "./toursList";
import {Container} from "react-bootstrap";
import "../index.css";

const MainComponent = () => {
  const [tours, setTours] = useState([]);

  const onFetch = async () => {
    let response = await fetch(courseAPI);
    let data = await response.json();
    setTours(data);
  };

  useEffect(() => {
    onFetch();
  }, []);

  return (
    <Container>
      <Header isData={tours ? true : false} />
      <ToursList toursList={tours} />
    </Container>
  );
};

export default MainComponent;
