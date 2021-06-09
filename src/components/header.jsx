import React from "react";
import {Button} from "react-bootstrap";
import "../index.css";

const Header = ({isData}) => {
  return (
    <div className="header">
      <h3>{isData ? "Our Tours" : "No Tours Left"}</h3>
      {isData ? <Button variant="primary">Refresh</Button> : ""}
    </div>
  );
};

export default Header;
