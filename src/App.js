import './App.css';
import NavBar from "./components/NavBar"
import SliderSelect from "./components/SliderSelect"
import TenureSelect from "./components/TenureSelect"
import Results from "./components/Results"

function App() {
  return (
    <div>
      <NavBar />
      <SliderSelect />
      <TenureSelect />
      <Results />
    </div>
  );
}

export default App;
