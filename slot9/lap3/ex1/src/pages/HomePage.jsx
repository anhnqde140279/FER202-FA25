import HomeCarousel from "../components/Carousel/HomeCarousel";

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <div className="mt-4 text-center">
        <h4>Featured Movies Collections</h4>
        <p className="text-secondary">Danh sách phim nổi bật bên dưới.</p>
      </div>
    </div>
  );
}
