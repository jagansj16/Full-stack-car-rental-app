import { useEffect, useState } from "react";
import CarModel from "../../models/CarModel";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

export const CarCheckoutPage = () => {
  const [car, setCar] = useState<CarModel>();
  const [isLoading, setIsLoading] = useState(true);

  const [httpError, setHttpError] = useState(null);
  const carId = window.location.pathname.split("/")[2];

  const { authState } = useOktaAuth();

  useEffect(() => {
    const fetchCar = async () => {
      const baseUrl: string = `http://localhost:8090/api/cars/${carId}`;
      const url: string = `${baseUrl}?page=0&size=9`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const responsejson = await response.json();

      const loadedCar: CarModel = {
        id: responsejson.id,
        brand: responsejson.brand,
        model: responsejson.model,
        transmission: responsejson.transmission,
        year: responsejson.year,
        price: responsejson.price,
        fuelType: responsejson.fuelType,
        category: responsejson.category,
        img: responsejson.img,
      };

      setCar(loadedCar);
      setIsLoading(false);
    };
    fetchCar().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [carId]);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }
  return (
    <div className="container m-5">
      <div className="row d-flex align-items-center justify-content-evenly ">
        <div className="col-lg-6 shadow-lg rounded">
          <div>
            {car?.img ? (
              <img className="checkoutCar" src={car.img} alt="imagecar" />
            ) : (
              <img
                src={require("./../../images/bmw-coupe.png")}
                className="card-img-top"
                alt="..."
              />
            )}
          </div>
        </div>
        <div className="col-lg-4">
          <table className="table  table-hover table-striped shadow">
            <thead>
              <tr>
                <th className="fs-1 fw-bold">{car?.brand}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brand</td>
                <td>{car?.brand}</td>
              </tr>
              <tr>
                <td>model</td>
                <td>{car?.model}</td>
              </tr>
              <tr>
                <td>transmission</td>
                <td>{car?.transmission}</td>
              </tr>
              <tr>
                <td>year</td>
                <td>{car?.year}</td>
              </tr>
              <tr>
                <td>fuelType</td>
                <td>{car?.fuelType}</td>
              </tr>
              <tr>
                <td>category</td>
                <td>{car?.category}</td>
              </tr>
              <tr>
                <td>price</td>
                <th>{car?.price}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center m-3 p-5 ">
        {authState?.isAuthenticated ? (
          <Link
            className="btn btn-primary btn-lg btnhover"
            type="button"
            to={`/Booking/${car?.id}`}
          >
            Book Now
          </Link>
        ) : (
          <Link
            className="btn btn-primary btn-lg btnhover "
            type="button"
            to="/login"
          >
            Book Now
          </Link>
        )}
      </div>
    </div>
  );
};
