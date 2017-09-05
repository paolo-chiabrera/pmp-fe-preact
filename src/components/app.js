import { h } from 'preact';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './layout';

import ImagePage from '../routes/image-page';
import ImageListPage from '../routes/image-list-page';

export default function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={ImageListPage} />
        <Route path="/pages/:pageNumber" component={ImageListPage} />
        <Route path="/images/:filename" component={ImagePage} />
      </Layout>
    </Router>
  );
}
