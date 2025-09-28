import Link from 'next/link';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="container">
      <h1>🎨 Artistry Market</h1>
      <p>A platform where young artists can sell their art pieces.</p>
      <nav>
        <Link href="/browse">Browse Artworks</Link> |{" "}
        <Link href="/sell">Sell Your Art</Link>
      </nav>
    </div>
  );
}
