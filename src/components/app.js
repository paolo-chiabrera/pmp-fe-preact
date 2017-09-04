import { h } from 'preact';
import { Router } from 'preact-router';

import 'spectre.css';

import Header from './header';
import Footer from './footer';
import Particles from './particles';

import Image from '../routes/image';
import Page from '../routes/page';

export default function App() {
  return (
      <div id="app">
        <Header />
        <Particles />
        <div class="page-wrapper">
          <Router>
            <Page path="/" />
            <Page path="/pages/:pageNumber" />
            <Image path="/images/:filename" />
          </Router>
        </div>
        <Footer />
      </div>
    ); 
}
