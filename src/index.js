import ElementClass from './video';

const name = 'video-plugin-hls';

if (customElements.get(name)) {
  console.log(`Custom element "${name}" already defined`);
} else {
  window.customElements.define(name, ElementClass);
}
