import React from "react";
import party from "../images/파티.jpeg";

export default function Welcome({ withImg, firstName, lastName }) {
  return (
    <>
      {withImg && <img src={party} alt="welcomeParty" height="200"></img>}
      <div>Hello!</div>
      <div>
        <span>{firstName}</span>
        {lastName}
      </div>
    </>
  );
}
