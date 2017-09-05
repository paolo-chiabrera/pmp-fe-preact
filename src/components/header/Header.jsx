import { h } from 'preact';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>PicMePlease</h1>
      </Link>
    </header>
  );
}
