import { h } from 'preact';
import { Link } from 'react-router-dom';

import CryingLogo from '../crying-logo';
import MainTitle from '../main-title';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <CryingLogo />
      </Link>
      <MainTitle />
    </header>
  );
}
