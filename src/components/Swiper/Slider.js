import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions/movieActions";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperStyle } from "./Slider.styles";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Slider extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <SwiperStyle>
        <h1>Latest Movies</h1>
        <div className="container">
          {this.props.movies.map((movie, id) => {
            return (
              <div className="container-card" key={id}>
                {" "}
                <h2>{movie.title}</h2>
                <p>{movie.body}</p>
              </div>
            );
          })}
        </div>
      </SwiperStyle>
    );
  }
}

const mapStatetoProps = (state) => ({
  movies: state.movies.items,
});

export default connect(mapStatetoProps, { fetchMovies })(Slider);
