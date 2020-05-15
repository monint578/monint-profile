import React from "react";
import Accordion from "../Accordion";

const Work = () => {
  return (
    <div>
      <h1 className="center">Work experience</h1>
      <h2 className="pt">Sales sector</h2>
      <Accordion>
        <div className="accor active">
          <div className="accor-head">Promotional Representative<span> / UAB “Partizanas”</span><p className="light">2018 07 - 2019 11</p></div>
          <div className="accor-body">
            <p>- Various product promotion and presentation</p>
            <p>- Company representation</p>
          </div>
        </div>
    </Accordion>
    <h2 className="pt">Textile manufacturing sector</h2>
    <Accordion>
        <div className="accor">
          <div className="accor-head">Sales Manager<span> / UAB “Garlita” knitting manufacturer</span><p className="light">2019 05 - 07</p></div>
          <div className="accor-body">
            <p>Working with semi-regular knitting products:</p>
            <p>- Consulting clients and taking orders for manufacturing step by
              step</p>
            <p>- Revisioning product samples for customers</p>
            <p>- Ordering knitwear accessories and yarn for the manufacturing process</p>
            <p>- Issuing invoices for customers</p>
            <p>- Working with the company's internal software</p>
          </div>
        </div>
        <div className="accor">
          <div className="accor-head">Deputy to sewing manager<span> / UAB “Garlita” knitting manufacturer</span><p className="light">2019 04 - 05</p></div>
          <div className="accor-body">
            <p>Working with semi-regular knitting manufacturing and sewing:</p>
            <p>- Organizing knitwear accessories for the manufacturing process</p>
            <p>- Working with invoices and accounting</p>
            <p>- Working with the company's internal software</p>
          </div>
        </div>
        <div className="accor">
          <div className="accor-head">Intern<span> / UAB “Garlita” knitting manufacturer</span><p className="light">2019 02 - 04</p></div>
          <div className="accor-body">
            <p>
            I was interning in knitting manufacturing while writing my Bachelor's
            degree project. While I was an intern I saw every part of the
            manufacturing and prepared an evaluation of the company for University.
            </p>
          </div>
        </div>
        <div className="accor">
          <div className="accor-head">Administrator of the weaving manufacturing<span> / UAB “Liningas” weaving manufacturer</span><p className="light">2017 06-07</p></div>
          <div className="accor-body">
            <p>
            Working in weaving manufacturing and administrative tasks in my second
            student year:
            </p>
            <p>- Organizing the company's assortment within an internal system</p>
            <p>- Working with invoices, accounting</p>
            <p>- Working in the laboratory</p>
          </div>
        </div>
        <div className="accor">
          <div className="accor-head">Knitting manufacturing assistance<span> / UAB “Omniteksas” knitting manufacturer</span><p className="light">2016 07 - 08</p></div>
          <div className="accor-body">
            <p>Working in knitting manufacturing in my first student year:</p>
            <p>- Making knitting samples for customers</p>
            <p>- Sewing clothing samples</p>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Work;
