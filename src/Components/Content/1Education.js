import React from "react";
import Accordion from "../Accordion";

const Education = () => {
  return (
      <div className="full-height">
        <h1 className="center pb smaller-text">Education</h1>
        <Accordion>
          <div className="accor active">
            <div className="accor-head">
              <h3 className="smaller-text-ed">Bachelor degree in Textile engineering</h3>
              <p className="light">
                2015 - 2019 Kaunas Univeristy of Technology
              </p>
            </div>
            <div className="accor-body">
              <p>
              For four years I studied at Kaunas University of Technology. My bachelor's topic was "Analysis of the Production and Quality of
                School Uniforms Produced in a Semi-regular Way". In my work I:
              </p>
              <p>
                - Designed two knitted articles (products) in a semi-regular way
              </p>
              <p>
                - Analyzed fibrous composition influence for knitted product
                pilling
              </p>
              <p>- Made technological progress and choose equipment</p>
              <p>- Established an annual knitting production program</p>
              <p>- Designed knitting manufacturing company plan with AutoCad</p>
            </div>
          </div>
          <div className="accor active">
            <div className="accor-head pt-sm">
              <h3>„Erasmus+“ – student exchange program</h3>
              <p className="light">2018 02 - 07</p>
            </div>
            <div className="accor-body content-grid">
              <p>In 2018 I traveled to Greece where I studied one semester at the University of West Attica. It was one of my best student years where I got to travel, experience new cultures, and gained knowledge in my field, which I wouldn‘t have gained in Lithuania.
              </p>
              <div className="accor-img-rec pt-sm"><img src="/img/greece.jpg" alt="" className="img"/></div>
              <img src="" alt=""/>
            </div>
          </div>
        </Accordion>
      </div>
  );
};

export default Education;
