import Navbar from "../components/Nav/Nav";
import Title from "../components/Title/Title";
import HeroSlider from "../components/HeroSlider/Slider";
import TrendingMovies from "../components/UpcomingSlider/Slider";
import TopRatedMovies from "../components/TopRatedSlider/Slider";
import { Provider } from "react-redux";
import store from "../store";

const home = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <HeroSlider />
        <Title title="Trending Now on Metflix" />
        <TrendingMovies />
        <Title title="Top Rated of All Time" />
        {/* <TopRatedMovies /> */}
      </div>
    </Provider>
  );
};

export default home;
