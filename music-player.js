<<<<<<< HEAD
const record = document.getElementById("player-record");
let angle = 0;
let rotationStart = new Date();
let rotationOffset = 0;
let lastX = 0;
let lastY = 0;
let size = 360;

function rotateRecord(timestamp) {
    if (timestamp >= 0) {
        if (rotationStart < 0) {
            rotationStart = timestamp;
        }

        angle = (((timestamp - rotationStart) / 5.0) % 360.0) + rotationOffset;
        // record.style.transform = "rotate(180deg)";
        record.style.transform = "rotate(" + angle + ", 256, 256)";
        // record.setAttribute("transform", "rotate(" + angle + ")");
        window.requestAnimationFrame(rotateRecord);
    }
}

(function () {
    // set frame count to equivalent of one rotation at 33 rpm
    // const frameCount = context.sampleRate * 1.8;

    // start record svg rotation
    rotateRecord(0);

    // register events
    /*
    if (window.PointerEvent) {
        record.addEventListener("pointerdown", onMouseDown);
        document.addEventListener("pointerup", onMouseUp);
        document.addEventListener("pointermove", onMouseMove);
    } else {
        // provide fallback if pointer events are not supported
        record.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mousemove", onMouseMove);
    }
    */
})();
=======
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
>>>>>>> 7b42ea0e552917c9588870e68800ae77572db2ad
