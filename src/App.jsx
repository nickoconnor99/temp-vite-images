import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return <main className="main">
  <ThemeToggle></ThemeToggle>
  <SearchForm></SearchForm>
  <Gallery></Gallery>
  </main>
};
export default App;
