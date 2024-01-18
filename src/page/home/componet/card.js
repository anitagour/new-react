import React from 'react'
const data = [
    {
      img: "img/p-1.jpg",
      title: "Luxury House",
      para: "The most common definition is that a luxurious home is one that has an extravagant amount of space, high-end amenities, and a high price tag.",
    //   btn: "Click me ",           
    },
    {
      img: "img/p-2.jpg",
      title: "Family Apartment",
      para: "Family apartments have 1-4 rooms, kitchen area, and bathroom. Apartment is rented unfurnished.",
    //   btn: "Click me-1 ",
    },
    {
      img: "img/p-3.jpg",
      title: "Villa House",
      para: "A Luxury Villa is a unique type of home that offers an upscale lifestyle and luxurious amenities. .",
    //   btn: "Click me-2 ",
    },
    {
        img: "img/p-4.jpg",
        title: "Residential House",
        para: "To build a content house, you need to start with your foundation: knowing your audience and researching long-tail keywords. ",
        // btn: "Click me-2 ",
      },
  ];
  console.log(data);
const Card = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {data.map((item) => {
            return (
                
              <div className="col-md-3 ">
                
                <div
                  class="card-1"
                 
                >
                  <div className="img-box p-3">
                  <div class="image ">
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
    </>
  )
}

export default Card;
