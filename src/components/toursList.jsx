import React from "react";
import Tour from "./tour";

const ToursList = ({toursList}) => {
  // useEffect(() => {
  //   // document.getElementById('tours-list').element
  // }, []);
  const renderTourList = () => {
    return toursList.map((tour, index) => {
      return <Tour {...tour} key={index} />;
    });
  };

  return <>{toursList && renderTourList()}</>;
};

export default ToursList;
