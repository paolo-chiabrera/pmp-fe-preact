import { h, Component, cloneElement } from 'preact';

export default class LazyLoader extends Component {
  constructor() {
    super();

    this.shouldLoad = false;
    this.container = null;

    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    this.container = document.getElementById(this.props.container);
  }

  componentDidMount() {
    this.container.addEventListener('scroll', this.onScroll);

    this.onScroll();
  }

  componentWillUpdate() {
    if (this.shouldLoad) {
      this.container.removeEventListener('scroll', this.onScroll);
    }
  }

  componentWillUnmount() {
    this.container.removeEventListener('scroll', this.onScroll);
  }

  render({ children, id }) {
    if (!this.shouldLoad) {
      return <div class="placeholder" id={`plh_${id}`} />;
    }

    return <span class="lazy-loaded">{children}</span>;
  }

  onScroll() {
    const { id, size = 100 } = this.props;
    const bounds = this.container.getBoundingClientRect();
    const containerY = bounds.height;

    const elem = document.getElementById(`plh_${id}`);

    if (!elem || !elem.getBoundingClientRect) {
      return;
    }

    const elemY = elem.getBoundingClientRect().y;

    this.shouldLoad = elemY <= containerY + size;

    if (this.shouldLoad) {
      this.forceUpdate();
    }
  }
}