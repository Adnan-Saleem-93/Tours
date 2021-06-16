import React from "react";
import Tour from "./tour";

const ToursList = ({toursList, removeTour}) => {
  const removeTourHandler = (id) => {
    removeTour(id);
  };

  const renderTourList = () => {
    return toursList.map((tour, index) => {
      return <Tour tour={tour} key={index} removeTour={removeTourHandler} />;
    });
  };

  return <>{toursList && renderTourList()}</>;
};

export default ToursList;
