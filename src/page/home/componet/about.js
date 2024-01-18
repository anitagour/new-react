import React from "react";

const About = () => {
  return (
    <>
      <div className="about-section py-3">
        <div className="container">
          <div className="main-heading ">
            <div class="txt" id="txt">
              <b>A</b>
              <b>b</b>
              <b>o</b>
              <b>u</b> abdhgfhg
              <b>t</b>
              <b>U</b>
              <b>s</b>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div class="container1">
                <div class="box" >
                  <img src="img/ab-img-1.png" alt="" width="100%" />
                  <div class="content">
                    <img src="img/ab-img-3.png" alt="" width="100%" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-5  ">
              <div className="ab-content-box">
                <h2>Luxurious Interiors, Comfortable Living.</h2>
                <p>
                  In modern interior design, luxury is felt through creating a
                  space that is thoughtfully designed but does not necessarily
                  have to be extravagant. Luxury in modern interior design is
                  using only the most necessary elements despite having a big
                  budget. It is simple, sophisticated and is not over-designed.
                </p>
                <h5 className="ps-4">Consider your budget:</h5>
                <p>
                  Achieving your sought-after luxurious look is not free. Your
                  budget is the amount that you are happy to invest in creating
                  and achieving the desired space.
                </p>
                <h5 className="ps-4">Choose a designer:</h5>
                <p>
                  Choosing the right designer for you is a very important step.
                  This individual will be the one to help bring your visions to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
