export const IMAGE_DATA = 'IMAGE_DATA';

export const IMAGES_DATA = 'IMAGES_DATA';

export const SET_PAGE = 'SET_PAGE';

export const PARTICLES_PARAMS = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: '#999'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 500,
      color: '#808080',
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000
      }
    },
    array: []
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: true
    },
    mouse: {}
  },
  retina_detect: true
};
