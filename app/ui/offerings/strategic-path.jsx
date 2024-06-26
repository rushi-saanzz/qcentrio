"use client";

import Image from "next/image";
import down from "@/public/down-tri.svg";
import check from "@/public/hexagon-check.svg";
import { useState } from "react";

export default function StrategicPath({ data }) {
  const [index, setIndex] = useState(1);

  function handleToggle(event) {
    setIndex(event.target.getAttribute("data-index"));
  }

  return (
    <div className="strategic-path-section balance-section">
      <div className="strategic-path-content">
        <h2 className="strategic-path-sub-heading">{data.upperheading}</h2>
        <h2 className="section-heading">{data.heading}</h2>
      </div>
      <div className="accordation-container">
        <div className="accordation-column">
          {data.accordation1.map((item) => {
            return (
              <div
                key={item.index}
                className={`accordation ${
                  index == item.index ? "active" : ""
                }`}>
                <div data-index={item.index} onClick={handleToggle}>
                  <Image
                    data-index={item.index}
                    src={check}
                    alt=""
                    style={{ width: "23px" }}
                  />
                  <div data-index={item.index} className="accordation-heading">
                    {item.title}
                  </div>
                  <Image
                    data-index={item.index}
                    className="accordation-arrow"
                    src={down}
                    alt=""
                  />
                </div>
                <div
                  className={`section-content accordation-content ${
                    index == item.index
                      ? "accordation-active"
                      : "accordation-inactive"
                  }`}>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
        <div className="accordation-column">
          {data.accordation2.map((item) => {
            return (
              <div
                key={item.index}
                className={`accordation ${
                  index == item.index ? "active" : ""
                }`}>
                <div data-index={item.index} onClick={handleToggle}>
                  <Image
                    data-index={item.index}
                    src={check}
                    alt=""
                    style={{ width: "23px" }}
                  />
                  <div data-index={item.index} className="accordation-heading">
                    {item.title}
                  </div>
                  <Image
                    data-index={item.index}
                    className="accordation-arrow"
                    src={down}
                    alt=""
                  />
                </div>
                <div
                  className={`section-content accordation-content ${
                    index == item.index
                      ? "accordation-active"
                      : "accordation-inactive"
                  }`}>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
