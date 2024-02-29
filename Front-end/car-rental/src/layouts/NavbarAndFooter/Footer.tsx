export const Footer = () => {
  return (
    <div className="container-fluid footer p-5">
      <div className="row">
        <div className="col-lg-3">
          <ul>
            <li className="fs-3 ">
              <span className="fw-bold">CAR</span> Rental
            </li>
            <li>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li>+91 72222 63333</li>
            <li>carrental@gmail.com</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul>
            <li className="fs-3 fw-bold">BRANCH</li>
            <li>Chennai</li>
            <li>Coimbatore</li>
            <li>Trichy</li>
            <li>Madurai</li>
          </ul>
        </div>
        <div className="col-lg-3 ">
          <ul>
            <li className="fs-3 fw-bold">WORKING HOURS</li>
            <li>Mon - Fri: 9:00AM - 11:00PM</li>
            <li>Sat: 9:00AM - 9:00PM</li>
            <li>Sun: 10:00AM - 6:00PM</li>
          </ul>
        </div>
        <div className="col-lg-3 ">
          <ul>
            <li className="fs-3 fw-bold">SUBSCRIPTION</li>
            <li className="  w-75">
              Subscribe your Email address for latest news & updates.
            </li>
            <li>
              <input
                type="email"
                className="form-control w-75"
                placeholder="Email address"
              />
            </li>
            <li>
              <button type="submit" className=" btn btn-primary  btnhover w-75">
                submit
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
