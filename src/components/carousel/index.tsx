import tw from "tailwind-styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhotoCard from "components/photoCard";
import { main } from "asset/img";

// const StyledSlider = styled(Slider)`
// .slick-dots li.slick-active button:before {
//     color:#fffff;
// }
// `;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-10">
      <Slider {...settings}>
        <div className="h-56">
          <PhotoCard
            className={"h-52 shadow-[1px_2px_20px_0px_#92eaf8a3]"}
            imgFile={main}
            badge="#Trending01"
            desc="Listen Best Hitz World PlayList"
          />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
