import { h } from 'preact';
import ParticlesJS from 'react-particles-js';

import { PARTICLES_PARAMS } from '../../constants';

const style = {
  height: '100%',
  left: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 0
};

export default function Particles() {
  setTimeout(() => {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    document.dispatchEvent(event);
  }, 100);

  return (
    <div class="particles-container">
      <ParticlesJS params={PARTICLES_PARAMS} style={style} />
    </div>
  );
}
