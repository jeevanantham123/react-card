import React from "react";
import Card from "../Card";
import { Data } from "../../Data";
import "./index.css";
export default function Home() {
  return (
    <div className="home">
      <div className="cards">
        {Data?.map((data) => {
          return <Card props={data} />;
        })}
      </div>
    </div>
  );
}
