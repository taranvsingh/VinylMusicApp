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

    $(".player-play").click(function () {
        playing();
        // $(this).addClass("paused");
        // $(".player-buttons #player-play").addClass("paused");
    });
});
