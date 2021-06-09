import React from "react";
import {Button} from "react-bootstrap";

const Header = ({isData}) => {
  return (
    <>
      <h3>{isData ? "Our Tours" : "No Tours Left"}</h3>
      {!isData ? <Button></Button> : ""}
    </>
  );
};

export default Header;
