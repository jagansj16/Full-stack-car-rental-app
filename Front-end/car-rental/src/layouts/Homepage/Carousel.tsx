import { useEffect, useState } from "react";
import { ReturnCar } from "./ReturnCar";
import CarModel from "../../models/CarModel";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import { Link } from "react-router-dom";

export const Carousel = () => {
  const [cars, setCars] = useState<CarModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      const baseUrl: string = "http://localhost:8090/api/cars";
      const url: string = `${baseUrl}?page=0&size=9`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const responsejson = await response.json();
      const responseData = responsejson._embedded.cars;

      const loadedCars: CarModel[] = [];
      for (const key in responseData) {
        loadedCars.push({
          id: responseData[key].id,
          brand: responseData[key].brand,
          model: responseData[key].model,
          transmission: responseData[key].transmission,
          year: responseData[key].year,
          price: responseData[key].price,
          fuelType: responseData[key].fuelType,
          category: responseData[key].category,
          img: responseData[key].img,
        });
      }
      setCars(loadedCars);
      setIsLoading(false);
    };
    fetchCars().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

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
    <div className="container-fluid accord">
      <div className="container mt-5 p-5 shadow-lg rounded bg-light">
        <div
          id="carouselExampleAutoplaying"
          className="carousel carousel-dark slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ps-5 pe-5">
            <div className="carousel-item active">
              <div className="row d-flex justify-content-evenly">
                {cars.slice(0, 3).map((car) => (
                  <ReturnCar car={car} key={car.id} />
                ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex justify-content-evenly">
                {cars.slice(3, 6).map((car) => (
                  <ReturnCar car={car} key={car.id} />
                ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex justify-content-evenly">
                {cars.slice(6, 9).map((car) => (
                  <ReturnCar car={car} key={car.id} />
                ))}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-5">
          <Link to="/search" className="btn btn-primary  btnhover">
            view more
          </Link>
        </div>
      </div>
    </div>
  );
};
