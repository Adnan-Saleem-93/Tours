import React from "react";
import {Button} from "react-bootstrap";

const Header = ({isData}) => {
  return (
    <div className="header">
      <h2>{isData ? "Our Tours" : "No Tours Left"}</h2>
      {!isData && <Button variant="primary">Refresh</Button>}
    </div>
  );
};

export default Header;
