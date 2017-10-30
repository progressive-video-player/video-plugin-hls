class VideoPlugin extends HTMLElement {
  constructor() {
    // console.log('==> VideoPlugin.constructor');
    super();
    this.parent = null;
    this.loaded = false;
  }

  connectedCallback() {
    // console.log('==> VideoPlugin.connectedCallback');
    const parent = this.parent = this.parentNode;
    parent.registerPlugin('video', this);
  }

  disconnectedCallback() {
    // console.log('==> VideoPlugin.disconnectedCallback');
    this.parent.unregisterPlugin('video', this);
    this.parent = null;
  }

  loadVideo(/* videoElement, url */) {
    // console.log(`==> VideoPlugin.loadVideo() elem: ${videoElement}, url: ${url}`);
    if (!this.loaded) {
      this.loaded = true;
      return true;
    }
    return false;
  }

  unloadVideo() {
    // console.log(`==> VideoPlugin.unloadVideo()`);
    if (this.loaded) {
      this.loaded = false;
    }
  }
}

if (!customElements) {
  throw new Error('Custom Elements not supported');
}

const name = 'video-plugin-hls';

if (customElements.get(name)) {
  console.log(`Custom element "${name}" already defined`);
} else {
  customElements.define(name, VideoPlugin);
}
