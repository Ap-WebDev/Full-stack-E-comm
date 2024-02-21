import AliceCarousel from "react-alice-carousel";
// import type { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductCard from "./ProductCard";

const responsive = {
  0: { items: 2 },
  720: { items: 3 },
  1024: { items: 5.25 },
};

const items = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
  <ProductCard key={item} />
));

// const onSlideChange = () => {};

// const onSlideChanged = () => {};

export default function CardCarousel() {
  return (
    <>
    <h2 className="ml-3 text-4xl font-bold mt-6 mb-2">Shirts</h2>
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        disableDotsControls
        keyboardNavigation
        items={items}
        responsive={responsive}
        //   onSlideChange={onSlideChange}
        //   onSlideChanged={onSlideChanged}
      />
    </>
  );
}
