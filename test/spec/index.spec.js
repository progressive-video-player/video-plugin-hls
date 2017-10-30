import '../../src/index';
import '../../core/src/index';

describe('Player', () => {
  it('should initialize/deinitialize video (JS)', () => {
    const player = document.createElement('video-player');
    const video = document.createElement('video-plugin-hls');
    player.appendChild(video);
    expect(player.plugins.video.size).toBe(0);
    document.body.appendChild(player);
    expect(player.plugins.video.size).toBe(1);
    player.removeChild(video);
    expect(player.plugins.video.size).toBe(0);
    document.body.removeChild(player);
    expect(player.plugins.video.size).toBe(0);
  });

  it('should initialize/deinitialize video (HTML)', () => {
    const htmlTextPlayer = '<video-player></video-player>';
    const htmlTextVideo = '<video-plugin-hls></video-plugin-hls>';
    document.body.innerHTML = htmlTextPlayer;
    const player = document.querySelector('video-player');
    expect(player.plugins.video.size).toBe(0);
    player.innerHTML = htmlTextVideo;
    expect(player.plugins.video.size).toBe(1);
    player.innerHTML = '';
    expect(player.plugins.video.size).toBe(0);
    document.body.innerHTML = '';
    expect(player.plugins.video.size).toBe(0);
  });

  it('should load/unload video (JS)', () => {
    const player = document.createElement('video-player');
    const video = document.createElement('video-plugin-hls');
    player.appendChild(video);
    document.body.appendChild(player);
    expect(video.loaded).toBe(false);
    player.setAttribute('src', 'http://xxx.com');
    expect(video.loaded).toBe(true);
    player.setAttribute('src', '');
    expect(video.loaded).toBe(false);
    player.removeChild(video);
    document.body.removeChild(player);
  });

  it('should load/unload video (HTML)', () => {
    const url = 'http://xxx.com';
    const htmlTextPlayer = `<video-player src="${url}"><video-plugin-hls></video-plugin-hls></video-player>`;
    document.body.innerHTML = htmlTextPlayer;
    const player = document.querySelector('video-player');
    expect(player.getAttribute('src')).toBe(url);
    const video = document.querySelector('video-plugin-hls');
    expect(video.loaded).toBe(true);
    document.body.innerHTML = '';
    expect(video.loaded).toBe(false);
  });
});
