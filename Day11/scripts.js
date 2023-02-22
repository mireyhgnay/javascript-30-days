const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// 재생 및 일시정지 토글 기능
function togglePlay() {
  // 비디오가 일시정지 상태라면 play 아니면 pause 
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// play, pause 이벤트에 따라 버튼 모양을 업데이트 해준다 
function updateButton() {
  // 일시정지 상태라면 재생표시 버튼, 재생중이라면 일시정지 버튼
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// 영상의 스킵 기능
function skip() {
 // parseFloat() : 문자열을 실수로 바꾸는 함수입니다.
 video.currentTime += parseFloat(this.dataset.skip);
}

// 볼륨과 배속을 조절하는 기능
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// 현재 재생 진행률에 따라 재생바 보여주는 기능
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// 특정 지점에 마우스를 놓았ㅇ르 때 영상의 특정 시간으로 이동시키는 기능
function scrub(e) {
  // currentTime: 비디오의 현재 재생 시간
  // duration: 전체 영상 시간
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
