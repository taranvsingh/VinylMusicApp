$(document).ready(function () {
    var record = $("#player-record");

    function playing() {
        //var trackduration

        record.velocity(
            {
                rotateZ: "+=360deg",
            },
            {
                duration: 1820,
                easing: "linear",
                loop: true,
                delay: 0,
            }
        );
    }

    function paused() {
        record.velocity("stop", true);
    }

    $(".player-play-button").click(function () {
        playing();
        $(this).css("display", "none");
        $(".player-pause-button").css("display", "block");
    });

    $(".player-pause-button").click(function () {
        paused();
        $(this).css("display", "none");
        $(".player-play-button").css("display", "block");
    });
});
