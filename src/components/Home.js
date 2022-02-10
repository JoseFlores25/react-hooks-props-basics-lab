import React from "react";
import user from "../data/user";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: user.color }}>
        {props.name && props.name} is a Web Developer from{" "}
        {props.city && props.city}
      </h1>
    </div>
  );
}

export default Home;
