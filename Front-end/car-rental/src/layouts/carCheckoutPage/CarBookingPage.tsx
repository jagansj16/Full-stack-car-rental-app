import { useEffect, useState } from "react";
import CarModel from "../../models/CarModel";
import { SpinnerLoading } from "../utils/SpinnerLoading";

export const CarBookingPage = () => {
  const [car, setCar] = useState<CarModel>();
  const [isLoading, setIsLoading] = useState(true);

  const [httpError, setHttpError] = useState(null);
  const carId = window.location.pathname.split("/")[2];

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
    <div>
      <div className="container-fluid p-5 ">
        <div className="row d-flex  align-items-center justify-content center">
          <div className="col-lg-4 shadow-lg rounded  mx-auto  Book">
            <div className="text-center  p-3">
              <h2>Thank you for Booking!</h2>
            </div>
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
              <p className="fs-1 fw-bold">{car?.brand}</p>
            </div>
            <table className="table table-light table-hover table-striped shadow">
              <thead></thead>
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
                  <td>fuelType</td>
                  <td>{car?.fuelType}</td>
                </tr>

                <tr>
                  <td>price</td>
                  <th>{car?.price}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
