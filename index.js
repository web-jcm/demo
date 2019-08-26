var audio = document.getElementsByTagName('audio')[0],
            play = document.getElementsByClassName('fa-play-circle')[0],
            next = document.getElementsByClassName('fa-chevron-circle-right')[0],
            mute = document.getElementsByClassName('fa-volume-off')[0],
            musicList = [1, 2, 3],
            i = 0,
            nextp = function () {
                if (i != musicList.length - 1) {
                    i++;
                } else {
                    i = 0;
                }
                audio.src = musicList[i] + ".mp3";
                audio.play();
            };
        play.addEventListener('click', function () {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
        next.addEventListener('click', nextp);
        audio.addEventListener('ended', nextp);
        mute.addEventListener('click', function () {
            if (audio.muted) {
                audio.muted = false;
            } else {
                audio.muted = true;
            }
        });
