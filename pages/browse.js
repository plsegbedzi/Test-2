import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';

export default function Browse() {
  const artworks = [
    { id: 1, title: 'Sunset Dreams', price: '$120', image: '/art1.jpg' },
    { id: 2, title: 'Abstract Flow', price: '$200', image: '/art2.jpg' },
    { id: 3, title: 'City Lights', price: '$150', image: '/art3.jpg' }
  ];

  return (
    <div className="container">
      <h1>🖼️ Browse Artworks</h1>
      <Link href="/">← Back to Home</Link>
      <div className="grid">
        {artworks.map((art) => (
          <div key={art.id} className="card">
            <Image src={art.image} alt={art.title} width={300} height={200} />
            <h3>{art.title}</h3>
            <p>{art.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
