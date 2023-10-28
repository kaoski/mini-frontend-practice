const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

const init = () => {
    progress.value = 0;
};

init();

const toggleVideoStatus = () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

const updatePlayIcon = () => {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
};

const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100;
    timestamp.innerText = converTimeUtil (video.currentTime);
};

const setVideoProgress = () => {
   video.currentTime = (+progress.value * video.duration) / 100.0;
};

const stopVideo = () => {
    video.currentTime = 0;
    video.pause();
}

const converTimeUtil = (seconds) => {
    seconds = Math.floor(seconds);
    let minutes = `${Math.floor(seconds / 60)}`;
    const hours = `${Math.floor(minutes / 60)}`;
    seconds = `${seconds % 60}`;
    minutes = `${minutes % 60}`;
    let time = hours.length == 1? '0' + hours : '' + hours;
    time = time + ':' + (minutes.length == 1? '0' + minutes : '' + minutes);
    time = time + ':' + (seconds.length == 1? '0' + seconds : seconds);
    return time;
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
