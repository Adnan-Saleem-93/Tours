import React from "react";
import {Button} from "react-bootstrap";

const Header = ({isData, refetchData}) => {
  const refreshHandler = () => {
    refetchData();
  };

  return (
    <div className="header">
      <h3>{isData ? "Our Tours" : "No Tours Left"}</h3>
      {!isData && (
        <Button variant="primary" onClick={refreshHandler}>
          Refresh
        </Button>
      )}
    </div>
  );
};

export default Header;
