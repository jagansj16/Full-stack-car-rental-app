export const ContactUs = () => {
  return (
    <div className="container-fluid contact">
      <div>
        <img
          className="porsche"
          src={require("./../../images/porsche.jpg")}
          alt="porsche"
        />
        <div className="container p-5 m-5">
          <h3 className="fw-bold">Contact Us</h3>
          <p className="fw-bold">Home/Contact</p>
        </div>
      </div>
      <div className="cotainer about">
        <div className="row p-5 justify-content-evenly">
          <div className="col-lg-5 col-sm-10 p-5">
            <h2 className="fs-1 fw-bold">Need additional information?</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <div className="row d-flex">
              <div className="col-lg-1">
                <img
                  src={require("./../../images/phone.png")}
                  alt="phone"
                  width={25}
                />
              </div>
              <div className="col-lg-6">
                <p className="fw-bold">+91 72222 63333</p>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-lg-1">
                <img
                  src={require("./../../images/email.png")}
                  alt="email"
                  width={25}
                />
              </div>
              <div className="col-lg-6">
                <p className="fw-bold">carRental@gmail.com</p>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-lg-1">
                <img
                  src={require("./../../images/location.png")}
                  alt="location"
                  width={25}
                />
              </div>
              <div className="col-lg-6">
                <p className="fw-bold">Chennai,India</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 d-flex flex-column  align-item-center shadow-lg bg-light rounded p-5  ">
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="E.g: Sam David "
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Example textarea</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary  btnhover">
                &nbsp; Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
