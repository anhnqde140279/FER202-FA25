import MovieCard from "../components/Movie/MovieCard";
import { movies } from "../data/movies";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MoviePage() {
  return (
    <div className="container">
      <h2>Movies</h2>
      <Row xs={1} md={3} className="g-4">
        {movies.map((m) => (
          <Col key={m.id}>
            <MovieCard
              img={m.poster}
              title={m.title}
              text={m.description}
              genre={m.genre}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
