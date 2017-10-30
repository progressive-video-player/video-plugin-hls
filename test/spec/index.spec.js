import '../../src/index';
import '../../core/src/index';

describe('video-plugin-hls', () => {
  describe('JS interface', () => {
    beforeEach(() => {
      const player = document.createElement('progressive-video-player');
      const video = document.createElement('video-plugin-hls');
      player.appendChild(video);
      document.body.appendChild(player);
    });

    afterEach(() => {
      const player = document.querySelector('progressive-video-player');
      document.body.removeChild(player);
    });

    it('should initialize/deinitialize video', () => {
      const player = document.querySelector('progressive-video-player');
      const video = document.querySelector('video-plugin-hls');
      expect(player.plugins.video.size).toBe(1);
      player.removeChild(video);
      expect(player.plugins.video.size).toBe(0);
    });

    it('should load/unload video', () => {
      const player = document.querySelector('progressive-video-player');
      const video = document.querySelector('video-plugin-hls');
      expect(video.loaded).toBe(false);
      player.setAttribute('src', 'http://xxx.com');
      expect(video.loaded).toBe(true);
      player.setAttribute('src', '');
      expect(video.loaded).toBe(false);
    });
  });

  describe('HTML interface', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <progressive-video-player src="http://xxx.com">
          <video-plugin-hls></video-plugin-hls>
        </progressive-video-player>
      `;
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    it('should initialize/deinitialize video', () => {
      const player = document.querySelector('progressive-video-player');
      expect(player.plugins.video.size).toBe(1);
      player.innerHTML = '';
      expect(player.plugins.video.size).toBe(0);
    });

    it('should load/unload video', () => {
      const player = document.querySelector('progressive-video-player');
      expect(player.getAttribute('src')).toBeTruthy();
      const video = document.querySelector('video-plugin-hls');
      expect(video.loaded).toBe(true);
      player.innerHTML = '';
      expect(video.loaded).toBe(false);
    });
  });
});
