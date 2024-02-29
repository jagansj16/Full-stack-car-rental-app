import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className="container-fluid position-relative">
      <div className="container">
        <div className="overflow-hidden">
          <img
            className="bgimage    d-none d-sm-block "
            src={require("./../../images/build.jpg")}
            alt="bgimage"
          />
        </div>
      </div>

      <div className="container py-5 ps-4 ">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 home-detail  mainlayer">
            <h4 className="py-2 fw-bold">Plan your trip now</h4>
            <h1 className="py-2 fw-bold">
              Save <span className="text-primary fw-bold">big</span> with our
              car rental
            </h1>
            <p className="py-2">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <Link
              className=" btn btn-primary btnhover fw-bold py-2 m-3 ms-0"
              to="/search"
            >
              Book ride
            </Link>
            <button className="btn btn-outline-primary btnhover fw-bold py-2 ms-0 m-3">
              Learn More
            </button>
          </div>
          <div className="col-lg-8 col-md-8 d-sm-none d-md-block d-none d-sm-block  mainlayer">
            <img
              className="home-car"
              src={require("./../../images/bmw-coupe.png")}
              alt="bmw-coupe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
