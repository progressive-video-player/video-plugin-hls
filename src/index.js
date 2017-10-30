import ElementClass from './video';

if (!customElements) {
  throw new Error('Custom Elements not supported');
}

const name = 'video-plugin-hls';

if (customElements.get(name)) {
  console.log(`Custom element "${name}" already defined`);
} else {
  customElements.define(name, ElementClass);
}
