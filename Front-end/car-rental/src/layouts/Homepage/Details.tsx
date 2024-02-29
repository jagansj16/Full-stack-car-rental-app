export const Details = () => {
  return (
    <div className="container-fluid  mt-5 mb-5">
      <div className="d-flex flex-column text-center justify-content-center-align-items-center  m-5">
        <h3 className="mt-5">Plan your trip now</h3>
        <h2 className="fw-bold">Quick &amp; easy car rental</h2>
      </div>
      <div className="row d-flex justify-content-around align-items-center text-center m-5 p-5">
        <div className="col-lg-3">
          <img
            src={require("./../../images/protection.png")}
            alt="img"
            width={50}
          />
          <h3 className="m-3">Select Car</h3>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>

        <div className="col-lg-3">
          <img
            src={require("./../../images/customer.png")}
            alt="img"
            width={60}
          />
          <h3 className="m-3">Contact Operator</h3>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="col-lg-3 mb-2">
          <img src={require("./../../images/car.png")} alt="img" width={70} />
          <h3 className="">Let's Drive</h3>
          <p>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};
