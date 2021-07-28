import Header from "./components/Header/Header";
import MovieSlider from "./components/Swiper/Slider";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Header /> */}
        <MovieSlider />
      </div>
    </Provider>
  );
}

export default App;
