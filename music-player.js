$(document).ready(function () {
    var record = $("#player-record");
    var play = $(".player-play-button");
    var pause = $(".player-pause-button");
    var progress = document.getElementById("player-progress-bar");
    var isPaused = true;
    var time = 0;

    reset();

    window.setInterval(function () {
        if (!isPaused) {
            time++;
            progress.value = time;
            if (time > progress.max) {
                changeSong();
                playing();
            }
        }
    }, 1000);

    progress.addEventListener("change", function () {
        time = progress.value;
    });

    function playing() {
        //var trackduration
        isPaused = false;
        record.velocity(
            {
                rotateZ: "+=360deg",
            },
            {
                duration: 30000,
                easing: "linear",
                loop: true,
                delay: 0,
            }
        );
    }

    function paused() {
        record.velocity("stop", true);
        isPaused = true;
    }

    function reset() {
        progress.value = 0;
        time = 0;
        paused();
        record.velocity({ rotateZ: "0deg" });
    }

    function changeSong() {
        reset();
        pause.css("display", "block");
        play.css("display", "none");
    }

    play.click(function () {
        playing();
        pause.css("display", "block");
        $(this).css("display", "none");
    });

    pause.click(function () {
        paused();
        $(this).css("display", "none");
        play.css("display", "block");
    });

    $(".change-song").click(function () {
        changeSong();
        playing();
    });
});
