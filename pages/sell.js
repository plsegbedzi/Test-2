import Link from 'next/link';
import '../styles/globals.css';

export default function Sell() {
  return (
    <div className="container">
      <h1>🖌️ Sell Your Art</h1>
      <Link href="/">← Back to Home</Link>
      <form className="form">
        <input type="text" placeholder="Artwork Title" required />
        <input type="text" placeholder="Price (e.g. $150)" required />
        <input type="file" accept="image/*" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
