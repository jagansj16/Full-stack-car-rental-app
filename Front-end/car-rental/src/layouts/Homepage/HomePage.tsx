import { Accordion } from "./Accordion";
import { Carousel } from "./Carousel";
import { Download } from "./Download";
import { Main } from "./Main";
import { Details } from "./Details";

export const HomePage = () => {
  return (
    <div className="homepagelayer">
      <Main />
      <Carousel />
      <Details />
      <Accordion />
      <Download />
    </div>
  );
};
