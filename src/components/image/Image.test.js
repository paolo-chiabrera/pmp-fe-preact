import { h } from 'preact';

import render from 'preact-render-to-string';

import Image from './Image.jsx';

const IMAGE = {
  filename: 'fake',
  meta: {
    ext: 'jpg'
  }
};

describe('Given a Image component', () => {
  it('should render correctly', () => {
    const tree = render(<Image image={IMAGE} />);

    expect(tree).toMatchSnapshot();
  });
});
