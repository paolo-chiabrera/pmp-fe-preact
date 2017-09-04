import { h } from 'preact';
import { Link } from 'preact-router/match';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>PicMePlease</h1>
      </Link>
    </header>
  );
}
