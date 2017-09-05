import { h } from 'preact';

import Header from '../header';
import Footer from '../footer';
import Particles from '../particles';

export default function Layout({ children }) {
  return (
    <div id="app">
      <Header />
      <Particles />
      <div class="page-wrapper">{children}</div>
      <Footer />
    </div>
  );
}
