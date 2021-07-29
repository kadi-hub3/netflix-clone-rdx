import { useRef, useEffect } from "react";
import { fetchTopRatedMovies } from "../../actions/movieActions";
import SwiperCore, { Autoplay, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperStyle } from "./Slider.styles";
import { useSelector, connect } from "react-redux";

SwiperCore.use([Autoplay, A11y, Navigation]);

const Slider = ({ fetchTopRatedMovies }) => {
  const movies = useSelector((state) => state.movies.items);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetchTopRatedMovies();
  }, [fetchTopRatedMovies]);
  return (
    <SwiperStyle>
      <div
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={5}
          spaceBetween={40}
          grabCursor={true}
          loop
          navigation
          autoplay={{ delay: 1000 }}
          speed={1200}
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

export default connect(null, { fetchTopRatedMovies })(Slider);
