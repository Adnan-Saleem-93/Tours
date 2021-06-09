import React, {useState, useEffect} from "react";
import {courseAPI} from "../config/constants";
import Header from "./header";
import ToursList from "./toursList";

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
    <>
      <Header isData={tours ? true : false} />
      <ToursList toursList={tours} />
    </>
  );
};

export default MainComponent;
