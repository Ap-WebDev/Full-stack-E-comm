import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const data = [
  { ImagePath: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg", Path: "" },
  { ImagePath: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg", Path: "" },
  { ImagePath: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg", Path: "" },
  { ImagePath: "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg", Path: "" },
];

const items = data.map((item, i) => (
  <img src={item.ImagePath} key={i}/>
));

export default function MainCarousel() {
  return (
    <AliceCarousel
      autoPlay
      autoPlayStrategy="none"
      autoPlayInterval={1500}
      animationDuration={1500}
      infinite
      touchTracking={false}
      disableDotsControls
      disableButtonsControls
      items={items}
    />
  );
}
