export const Download = () => {
  return (
    <div className="container-fluid downimg">
      <div className="download-img overflow-hidden ">
        <img
          className="d-sm-none  d-md-block d-none d-sm-block"
          src={require("./../../images/bg02.3efbc4567749d0a5671e.png")}
          alt="download-img"
        />
      </div>
      <div className="container d-flex">
        <div className="row">
          <div className=" col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start downdetails">
            <div className=" download-details  mb-5 p-3 ">
              <div className=" algin-middle p-2 justify-content-center">
                <h2 className="fw-bold p-2">
                  Download our app to get most out of it
                </h2>
                <p className="m-4 ms-0">
                  Thrown shy denote ten ladies though ask saw. Or by to he going
                  think order event music. Incommode so intention defective at
                  convinced. Led income months itself and houses you.
                </p>
                <div className="mb-5">
                  <img
                    className="m-2 ms-0"
                    src={require("./../../images/playstore.png")}
                    alt="playstore-img"
                  />
                  <img
                    className="m-2  ms-0"
                    src={require("./../../images/appstore.png")}
                    alt="Appstrore-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
