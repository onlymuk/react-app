import React from "react";
import party from "../images/파티.jpeg";

export default function Welcome(props) {
  return (
    <>
      {props.withImg && <img src={party} alt="welcomeParty" height="200"></img>}
      <div>Hello!</div>
      <div>
        <span>{props.firstName}</span>
        {props.lastName}
      </div>
    </>
  );
}
