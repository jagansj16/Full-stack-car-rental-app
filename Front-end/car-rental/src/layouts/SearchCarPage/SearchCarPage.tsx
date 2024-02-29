import { useEffect, useState } from "react";
import CarModel from "../../models/CarModel";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import { ReturnCar } from "../Homepage/ReturnCar";
import { Pagination } from "../utils/Pagination";
import { Link } from "react-router-dom";

export const SearchCarPage = () => {
  const [cars, setCars] = useState<CarModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [carPerPage] = useState(9);
  const [totalAmountOfCars, setTotalAmoundOfCars] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [searchUrl, setSearchUrl] = useState("");
  const [categorySelection, setCategorySelection] = useState("Car Category");

  useEffect(() => {
    const fetchCars = async () => {
      const baseUrl: string = "http://localhost:8090/api/cars";
      let url: string = "";

      if (searchUrl === "") {
        url = `${baseUrl}?page=${currentPage - 1}&size=${carPerPage}`;
      } else {
        let searchWithPage = searchUrl.replace(
          "<pageNumber>",
          `${currentPage - 1}`
        );
        url = baseUrl + searchWithPage;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const responsejson = await response.json();
      const responseData = responsejson._embedded.cars;

      setTotalAmoundOfCars(responsejson.page.totalElements);
      setTotalPages(responsejson.page.totalPages);

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
    window.scrollTo(0, 0);
  }, [currentPage, searchUrl, carPerPage]);

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

  const searchHandleChange = () => {
    setCurrentPage(1);
    if (search === "") {
      setSearchUrl("");
    } else {
      setSearchUrl(
        `/search/findByBrandContaining?brand=${search}&page=<pageNumber>&size=${carPerPage}`
      );
    }
    setCategorySelection("Car Category");
  };

  const categoryField = (value: string) => {
    setCurrentPage(1);
    if (
      value.toLowerCase() === "hatchback" ||
      value.toLowerCase() === "sedan" ||
      value.toLowerCase() === "suv"
    ) {
      setCategorySelection(value);
      setSearchUrl(
        `/search/findByCategory?category=${value}&page=<pageNumber>&size=${carPerPage}`
      );
    } else if (value.toLowerCase() === "model") {
      setSearchUrl(
        `/search/findByModel?model=${search}&page=<pageNumber>&size=${carPerPage}`
      );
      setCategorySelection(value);
    } else {
      setCategorySelection("All");
      setSearchUrl(`?page=<pageNumber>&size=${carPerPage}`);
    }
  };

  const indexOfLastCar: number = currentPage * carPerPage;
  const indexOfFirstCar: number = indexOfLastCar - carPerPage;

  let lastItem =
    carPerPage * currentPage <= totalAmountOfCars
      ? carPerPage * currentPage
      : totalAmountOfCars;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="container-fluid p-5">
      <div>
        <img
          className="porsche"
          src={require("./../../images/porsche.jpg")}
          alt="porsche"
        />
        <div className="container p-5 ms-5">
          <h3 className="fw-bold">Search Cars</h3>
          <p className="fw-bold">Home/Search</p>
        </div>
      </div>
      <div className="container about mt-5">
        <div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-10  mb-3 ">
              <div className="d-flex ">
                <input
                  className="form-control me-2 flex-grow-1 "
                  type="search"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />

                <button
                  className="btn btn-outline-primary fw-bold"
                  type="submit"
                  onClick={() => searchHandleChange()}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 d-flex col-sm-12 justify-content-end ">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle fw-bold"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {categorySelection}
                </button>
                <ul className="dropdown-menu">
                  <li onClick={() => categoryField("All")}>
                    <Link className="dropdown-item" to="#">
                      All
                    </Link>
                  </li>
                  <li onClick={() => categoryField("hatchBack")}>
                    <Link className="dropdown-item" to="#">
                      HatchBack
                    </Link>
                  </li>
                  <li onClick={() => categoryField("sedan")}>
                    <Link className="dropdown-item" to="#">
                      Sedan
                    </Link>
                  </li>
                  <li onClick={() => categoryField("suv")}>
                    <Link className="dropdown-item" to="#">
                      suv
                    </Link>
                  </li>
                  <li onClick={() => categoryField("model")}>
                    <Link className="dropdown-item" to="#">
                      Model
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {totalAmountOfCars > 0 ? (
            <div className="d-flex justify-content-start ">
              <div className="mt-3 ">
                <div>
                  <h5>Number of results : ({totalAmountOfCars})</h5>
                </div>
                <p>
                  {indexOfFirstCar + 1} to {lastItem} of {totalAmountOfCars}{" "}
                  items:
                </p>
              </div>
            </div>
          ) : (
            <div className="m-5">
              <h3>Sorry no cars available!</h3>
            </div>
          )}

          <div className="row colum-gap-3  d-flex justify-content-evenly">
            {cars.map((car) => (
              <ReturnCar car={car} key={car.id} />
            ))}
            <div className="d-flex justify-content-center mt-5">
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  paginate={paginate}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
