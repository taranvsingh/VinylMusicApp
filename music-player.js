$(document).ready(function () {
    var record = $("#player-record");

    function playing() {
        //var trackduration

        record.velocity(
            {
                rotateZ: "+=360deg",
            },
            {
                duration: 3640,
                easing: "linear",
                loop: true,
                delay: 0,
            }
        );
    }

    function paused() {
        record.velocity("stop", true);
    }

    function reset() {
        paused();
        record.velocity({ rotateZ: "0deg" });
        $(".player-pause-button").css("display", "block");
        $(".player-play-button").css("display", "none");
    }

    $(".player-play-button").click(function () {
        playing();
        $(this).css("display", "none");
        $(".player-pause-button").css("display", "block");
    });

    $(".player-pause-button").click(function () {
        reset();
        paused();
        $(this).css("display", "none");
        $(".player-play-button").css("display", "block");
    });

    $(".reset-record").click(function () {
        reset();
        playing();
    });
});
