import React from "react";
import {Button} from "react-bootstrap";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const Header = ({isData, refetchData}) => {
  const refreshHandler = () => {
    refetchData();
  };

  return (
    <div className="header">
      <h3>
        {isData ? "Our Tours" : "No Tours Left"}
        {/* <Button variant="outline-danger" title="Clear All Tours">
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button> */}
      </h3>
      {!isData && (
        <Button variant="primary" onClick={refreshHandler}>
          Refresh
        </Button>
      )}
    </div>
  );
};

export default Header;
