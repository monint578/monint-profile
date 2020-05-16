import React from "react";
import Accordion from "../Accordion";

const Activities = () => {
  return (
    <div>
      <h1 className="center pb">Activities</h1>
      <Accordion>
          <div className="accor active">
            <div className="accor-head" >
              <h3>Faculty-student association MIDF “InDi” member</h3>
            </div>
            <div className="accor-body content-grid">
                <div>
                  <p>- Member of social and academics department</p>
                  <p>- Organize meetings between students and faculty members</p>
                  <p>- Student event organization such as: "Naktinis krepšinis" and "Dizaino
              dienos"</p>
                </div>
                <div className="accor-img pt-sm">
                  <img className="img" src="/img/indi.JPG" alt=""/>
                </div>
            </div>
          </div>
          <div className="accor">
            <div className="accor-head pt-sm">
              <h3 className="">Student class president of the “Textile engineering” group</h3>
            </div>
            <div className="accor-body">
              <p>- Member of social and academics department</p>
            </div>
          </div>
          <div className="accor">
            <div className="accor-head pt-sm">
              <h3 className="">Design studio member for 2 years</h3>
            </div>
            <div className="accor-body">
              <p>- Member of social and academics department</p>
            </div>
          </div>
          <div className="accor">
            <div className="accor-head pt-sm">
              <h3 className="">Scientific activity</h3>
            </div>
            <div className="accor-body">
              <p>
                - Accomplished research on "Influence of flame retardant
                finishing on flammability of various cellulose fibres".
              </p>
              <p>
                - Participated in the conference "Baltic Polymers Symposium
                2017"
              </p>
            </div>
          </div>
      </Accordion>
    </div>
  );
};

export default Activities;
