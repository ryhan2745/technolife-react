import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import BannerSlide from "../Modules/Slides/BannerSlide";
import CategorySlide from "../Modules/Category/CategorySlide";
import BrandsSlide from "../Modules/Slides/BrandsSlide";
import VblogSlide from "../Modules/Slides/VblogSlide";
import SimillarCardSlide from "../Modules/Products/SimillarCardSlide";
const Slider = ({ slides, name, technooff, vblogs }) => {
  return (
    slides &&
    (name == "banner" ? (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {slides.map((slide) => (
            <SwiperSlide className="m-3 mx-auto w-full" key={slide.id}>
              <BannerSlide {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    ) : name == "category" ? (
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 8,
              spaceBetween: 1,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[FreeMode]}
          className="mySwiper flex px-5 flex-wrap-reverse"
          style={{ direction: "rtl" }}
        >
          {slides.map((slide) => (
            <SwiperSlide className="" style={{ width: "90%" }} key={slide.id}>
              <CategorySlide {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    ) : name == "isflagproduct" ? (
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        breakpoints={{
          576: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
        modules={[FreeMode]}
        className="mySwiper rounded flex justify-start "
        style={{ direction: "rtl" }}
      >
        {slides.map((slide) => (
          <SwiperSlide className="flex items-start" key={slide.id}>
            <SimillarCardSlide {...slide} technooff={technooff} />
          </SwiperSlide>
        ))}
      </Swiper>
    ) : name == "vblog" ? (
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        modules={[FreeMode]}
        className="mySwiper rounded flex justify-between"
        style={{ direction: "rtl" }}
      >
        {slides.map((slide) => (
          <SwiperSlide className="flex items-start">
            <VblogSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        freeMode={true}
        breakpoints={{
          576: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
        modules={[FreeMode]}
        className="mySwiper rounded flex justify-start "
        style={{ direction: "rtl" }}
      >
        {slides.map((slide) => (
          <SwiperSlide className="flex items-start" key={slide.id}>
            <BrandsSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    ))
  );
};
export default Slider;
