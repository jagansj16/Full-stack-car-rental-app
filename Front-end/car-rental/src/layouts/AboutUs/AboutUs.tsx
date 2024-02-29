import { Details } from "../Homepage/Details";

export const AboutUs = () => {
  return (
    <div className="container-fluid">
      <div>
        <img
          className="porsche"
          src={require("./../../images/porsche.jpg")}
          alt="porsche"
        />
        <div className="container p-5 m-5">
          <h3 className="fw-bold">About Us</h3>
          <p className="fw-bold">Home/About</p>
        </div>
      </div>
      <div className="container  about ">
        <div className="row d-flex justify-content-center align-items-center rounded shadow  ">
          <div className="col-lg-4 p-5 mb-3">
            <img
              className="w-100"
              src={require("./../../images/about.jpg")}
              alt="about"
            />
          </div>
          <div className="col-lg-5">
            <div>
              <h3 className="fw-bold">About Company</h3>
              <h2 className="fw-bold">
                You start the engine and your adventure begins
              </h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Details />
    </div>
  );
};
