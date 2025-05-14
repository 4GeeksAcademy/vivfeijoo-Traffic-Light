import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px" }}>
      <div
        onClick={() => setColor("red")}
        style={{
          backgroundColor: color === "red" ? "red" : "gray",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          margin: "10px",
          cursor: "pointer"
        }}
      />
      <div
        onClick={() => setColor("yellow")}
        style={{
          backgroundColor: color === "yellow" ? "yellow" : "gray",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          margin: "10px",
          cursor: "pointer"
        }}
      />
      <div
        onClick={() => setColor("green")}
        style={{
          backgroundColor: color === "green" ? "green" : "gray",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          margin: "10px",
          cursor: "pointer"
        }}
      />
    </div>
  );
};

export default TrafficLight;
