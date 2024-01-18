import React from "react";
const data = [
  {
    img: "img/i-home.png",
    title: "Interior for Home",
    para: "The most common definition is that a luxurious home is one that has an extravagant amount of space, high-end amenities, and a high price tag.",
    //   btn: "Click me ",
  },
  {
    img: "img/finan.png",
    title: "Trusted by thousands",
    para: "Family apartments have 1-4 rooms, kitchen area, and bathroom. Apartment is rented unfurnished.",
    //   btn: "Click me-1 ",
  },
  {
    img: "img/trust.png",
    title: "Financing made easy",
    para: "A Luxury Villa is a unique type of home that offers an upscale lifestyle and luxurious amenities. .",
    //   btn: "Click me-2 ",
  },
  {
    img: "img/suport.png",
    title: "24/7 support",
    para: "To build a content house, you need to start with your foundation: knowing your audience and researching long-tail keywords. ",
    // btn: "Click me-2 ",
  },
];
console.log(data);

const Choose = () => {
  return (
    <>
      <div className="why-choose  ">
        <div className="main-heading "></div>
        <div className="choose-bg py-5">
          <div className="container">
            <div className="row">
              {data.map((item) => {
                return (
                  <div className="col-md-3 ">
                    <div class="y-chose-card">
                      <div className="img-box p-3">
                        <div class="image-1  ">
                          <img src={item.img} width={100} alt="" />
                        </div>
                      </div>
                      {/* <img src={item.img} class="card-img-top p-2" alt="..." /> */}
                      <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.para}</p>
                        {/* <a href="/" class="btn btn-primary">
                      {item.btn}
                    </a> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
