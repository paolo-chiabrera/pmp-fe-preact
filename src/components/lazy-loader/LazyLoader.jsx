import { h, Component, cloneElement } from 'preact';
import { passiveeventlisteners } from 'modernizr';

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
    const opts = passiveeventlisteners ? { passive: true } : false;

    this.container.addEventListener('scroll', this.onScroll, opts);

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
      return <div class="lazy-placeholder" id={`plh_${id}`} />;
    }

    return <span class="lazy-loaded">{children}</span>;
  }

  checkShouldLoad(containerBounds, elemBounds, offset = 100) {
    return elemBounds.top <= containerBounds.height + offset;
  }

  onScroll() {
    const { id, offset } = this.props;
    const containerBounds = this.container.getBoundingClientRect();

    const elem = document.getElementById(`plh_${id}`);

    if (!elem || !elem.getBoundingClientRect) {
      return;
    }

    this.shouldLoad = this.checkShouldLoad(
      containerBounds,
      elem.getBoundingClientRect(),
      offset
    );

    if (this.shouldLoad) {
      this.forceUpdate();
    }
  }
}
