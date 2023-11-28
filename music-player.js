$(document).ready(function () {
    var record = $("#player-record");
    var play = $(".player-play-button");
    var pause = $(".player-pause-button");
    var progress = document.getElementById("player-progress-bar");
    var isPaused = true;
    var time = 0;

    reset();

    //change progress bar
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

    //set time to current progress bar value
    progress.addEventListener("change", function () {
        time = progress.value;
    });

    //to spin the record
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

    //pause record
    function paused() {
        record.velocity("stop", true);
        isPaused = true;
    }

    //reset all values, record and progress bar
    function reset() {
        progress.value = 0;
        time = 0;
        paused();
        record.velocity({ rotateZ: "0deg" });
    }

    //reset record and display pause button
    function changeSong() {
        reset();
        pause.css("display", "block");
        play.css("display", "none");
    }

    //play button
    play.click(function () {
        playing();
        pause.css("display", "block");
        $(this).css("display", "none");
    });

    //pause button
    pause.click(function () {
        paused();
        $(this).css("display", "none");
        play.css("display", "block");
    });

    //prev and next buttons
    $(".change-song").click(function () {
        changeSong();
        playing();
    });
});
