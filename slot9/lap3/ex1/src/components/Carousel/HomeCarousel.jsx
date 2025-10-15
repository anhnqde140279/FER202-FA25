import { Carousel, Badge } from "react-bootstrap";
import { carouselMovies } from "../../data/carousel";

export default function HomeCarousel() {
  if (!carouselMovies?.length) return null;

  return (
    <Carousel interval={3000}>
      {carouselMovies.map((m) => (
        <Carousel.Item key={m.id}>
          <img className="d-block w-100" src={m.poster} alt={m.title} style={{ height: 420, objectFit: "cover" }} />
          <Carousel.Caption className="text-start" style={{ background: "rgba(0,0,0,0.35)", borderRadius: 12 }}>
            <h3>{m.title} <Badge bg="info">{m.genre}</Badge> <Badge bg="secondary">{m.year}</Badge></h3>
            <p>{m.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
