import React from "react";
import Accordion from "../Accordion";

const Activities = () => {
  return (
    <div className="full-height">
      <h1 className="center smaller-text">Activities</h1>
      <h2 className="pt smaller-text-color">Student years</h2>
      <Accordion>
          <div className="accor active">
            <div className="accor-head pt-sm" >
              <p>Member of MIDF faculty-student association „InDi“</p>
            </div>
            <div className="accor-body content-grid">
                <div>
                  <p>- Member of social and academics department</p>
                  <p>- Organizing meetings between students and faculty members</p>
                  <p>- Organizing student events such as: "Naktinis krepšinis" and "Dizaino
              dienos"</p>
                </div>
                <div className="accor-img pt-sm">
                  <img className="img" src="/img/indi.JPG" alt=""/>
                </div>
            </div>
          </div>
          <div className="accor">
            <div className="accor-head pt-sm">
              <p>Class president of the “Textile engineering” student group</p>
            </div>
            <div className="accor-body">
              <p>For four years as the class president, my main responsibility was to improve the quality of studies by participating in focus groups with the faculty deanery and professors.</p>
            </div>
          </div>
          <div className="accor">
            <div className="accor-head pt-sm">
              <p>Scientific activity</p>
            </div>
            <div className="accor-body">
              <p>
                - Accomplished research on "Influence of flame retardant
                finishing on flammability of various cellulose fibres".
              </p>
              <p>
                - Participated in the conference "Baltic Polymers Symposium
                2017" in Tallinn, Estonia.
              </p>
            </div>
          </div>
          </Accordion>
          <h2 className="pt smaller-text-color">Other activities</h2>
          <div className="pl">
            <div className="accor-head pt-sm">
              <p>Design studio member for 2 years</p>
            </div>
            <div className="accor-head pt-sm">
              <p>8 years of music school</p>
            </div>
          </div>
    </div>
  );
};

export default Activities;
