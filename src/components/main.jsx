import React, {useState, useEffect} from "react";
import {courseAPI} from "../config/constants";
import Header from "./header";
import ToursList from "./toursList";
import {Container} from "react-bootstrap";

const MainComponent = () => {
  //#region hooks
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onFetch();
  }, []);
  //#endregion

  //#region methods
  const onFetch = () => {
    setIsLoading(true);
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
  const removeTour = (id) => {
    let newTourList = [...tours];
    newTourList = newTourList.filter((tour) => tour.id !== id);
    setTours(newTourList);
  };

  const refetchData = (params) => {
    onFetch();
  };
  //#endregion

  //#region component render
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <Container>
      <Header isData={tours.length ? true : false} refetchData={refetchData} />
      <ToursList toursList={tours} removeTour={removeTour} />
    </Container>
  );
  //#endregion
};

export default MainComponent;
