import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import FooterPage from './pages/FooterPage';
import MyNavbar from "./components/NavBar/MyNavbar";

function App() {
  return (
    <div>
      <MyNavbar />
      <HomePage />
      <MoviePage />
      <FooterPage />
    </div>
  );
}

export default App;
