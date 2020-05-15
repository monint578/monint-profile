import React from "react";
import Accordion from "../Accordion";

const Activities = () => {
  return (
    <div>
      <Accordion>
          <div className="accor active">
            <div className="accor-head" >
              <h2 className="center">Faculty-student association MIDF “InDi” member</h2>
            </div>
            <div className="accor-body">
                <div>
                  <p>- Member of social and academics department</p>
                  <p>- Organize meetings between students and faculty members</p>
                  <p>- Student event organization such as: "Naktinis krepšinis" and "Dizaino
              dienos"</p>
                </div>
                <div className="accor-img">
                  <img className="img" src="/img/indi.JPG" alt=""/>
                </div>
            </div>
          </div>
          <div className="accor">
            <div className="accor-head">
              <h2 className="center">Student class president of the “Textile engineering” group</h2>
            </div>
            <div className="accor-body">
              <p>- Member of social and academics department</p>
            </div>
          </div>
          <div className="accor">
            <div className="accor-head">
              <h2 className="center">Design studio member for 2 years</h2>
            </div>
            <div className="accor-body">
              <p>- Member of social and academics department</p>
            </div>
          </div>
          <div className="accor">
            <div className="accor-head">
              <h2 className="center">Scientific activity</h2>
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
