class CarModel {
  id: number;
  brand?: string;
  model?: string;
  transmission?: string;
  year?: number;
  price?: number;
  fuelType?: string;
  category?: string;
  img?: string;

  constructor(
    id: number,
    brand: string,
    model: string,
    transmission: string,
    year: number,
    price: number,
    fuelType: string,
    category: string,
    img: string
  ) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.transmission = transmission;
    this.year = year;
    this.price = price;
    this.fuelType = fuelType;
    this.category = category;
    this.img = img;
  }
}

export default CarModel;
