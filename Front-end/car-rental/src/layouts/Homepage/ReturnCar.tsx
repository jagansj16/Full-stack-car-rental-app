import React from "react";
import CarModel from "../../models/CarModel";
import { Link } from "react-router-dom";

export const ReturnCar: React.FC<{ car: CarModel }> = (props) => {
  return (
    <div className="card col-xl-3 col-lg-4 col-md-5 col-sm-8 shadow-lg rounded m-3 pt-1 cardd  ">
      {props.car.img ? (
        <img
          src={props.car.img}
          className="card-img-top"
          alt="..."
          width={250}
          height={200}
        />
      ) : (
        <img
          src={require("./../../images/bmw-coupe.png")}
          className="card-img-top"
          alt="..."
        />
      )}

      <div className="card-body ">
        <table className="table  table-hover table-striped">
          <thead></thead>
          <tbody>
            <tr className="row pt-2">
              <td className="col-lg-7 col-md-7 ">
                <h5 className="card-title fw-bold">{props.car.brand}</h5>
              </td>
              <td className="col-lg-5 col-md-5 ">
                <p className="card-title fw-bold">{props.car.transmission}</p>
              </td>
            </tr>

            <tr className="row pt-2">
              <td className="col-lg-7 col-md-7 ">
                <p className="card-text fw-bold">{props.car.model}</p>
              </td>
              <td className="col-lg-5 col-md-5 ">
                <p className="card-text fw-bold">{props.car.fuelType}</p>
              </td>
            </tr>

            <tr className="row pt-2">
              <td className="col-lg-7 col-md-7 ">
                <p className="card-text fw-bold">{props.car.category}</p>
              </td>
              <td className="col-lg-5 col-md-5 ">
                <p className="card-text  fw-bold">{props.car.year}</p>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <table className="table  table-hover table-striped shadow "></table> */}
        <div className="d-flex align-items-end justify-content-center view pb-3 ">
          <Link
            className="btn btn-outline-primary btnhover fw-bold  "
            to={`/checkout/${props.car.id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
