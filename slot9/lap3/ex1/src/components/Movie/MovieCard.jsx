import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function MovieCard({ img, title, text, genre, year }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={img}
        alt={title}
        style={{ height: 250, objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Badge bg="info" className="me-2">{genre}</Badge>
        <Badge bg="secondary">{year}</Badge>
        <div className="mt-3 d-flex justify-content-between">
          <Button variant="primary">Details</Button>
          <Button variant="outline-warning" size="sm">
            Add to Favourites
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
