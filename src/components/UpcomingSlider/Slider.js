import { useRef, useEffect } from "react";
import { fetchUpcomingMovies } from "../../actions/movieActions";
import SwiperCore, { Autoplay, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperStyle } from "./Slider.styles";
import { useSelector, connect } from "react-redux";

SwiperCore.use([Autoplay, A11y, Navigation]);

const Slider = ({ fetchUpcomingMovies }) => {
  const movies = useSelector((state) => state.movies.items);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetchUpcomingMovies();
  }, [fetchUpcomingMovies]);
  return (
    <SwiperStyle>
      <div
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={5}
          grabCursor={true}
          loop
          navigation
          autoplay={{ delay: 1000 }}
          speed={1200}
          breakpoints={{
            350: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          <div className="container">
            {movies &&
              movies.map((movie, id) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="container-img">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + movie.poster_path
                        }
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
          </div>
        </Swiper>
      </div>
    </SwiperStyle>
  );
};

export default connect(null, { fetchUpcomingMovies })(Slider);
