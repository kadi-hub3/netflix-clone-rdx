import { useRef, useEffect } from "react";
import { fetchMovies } from "../../actions/movieActions";
import SwiperCore, { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperStyle } from "./Slider.styles";
import { useSelector, connect } from "react-redux";

SwiperCore.use([Autoplay, A11y]);

const Slider = ({ fetchMovies }) => {
  const movies = useSelector((state) => state.movies.items);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetchMovies();
    console.log(fetchMovies());
  }, []);
  return (
    <SwiperStyle>
      <div
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          grabCursor={true}
          loop
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

                    <div className="title">
                      {/* <p>{movie.overview}</p> */}
                      <h5>{movie.vote_average}</h5>
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

export default connect(null, { fetchMovies })(Slider);
