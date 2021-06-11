import React, {useState, useEffect} from "react";
import {courseAPI} from "../config/constants";
import Header from "./header";
import ToursList from "./toursList";
import {Container} from "react-bootstrap";

const MainComponent = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onFetch = () => {
    try {
      setTimeout(async () => {
        let response = await fetch(courseAPI);
        let data = await response.json();
        setTours(data);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <Container>
      <Header isData={tours ? true : false} />
      <ToursList toursList={tours} />
    </Container>
  );
};

export default MainComponent;
