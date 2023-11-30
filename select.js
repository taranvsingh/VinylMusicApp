$(document).ready(function () {
    const gridSongs = document.getElementsByClassName("grid-song");
    const selected = [];

    for (const element in gridSongs) {
        if (Object.hasOwnProperty.call(gridSongs, element)) {
            const song = gridSongs[element];
            song.addEventListener("click", select.bind(this, song.id));
        }
    }

    function select(songID) {
        const song = document.getElementById(songID);
        const icon = document.getElementById(songID + "-selected");
        if (selected.includes(songID)) {
            song.classList.remove("bg-green-200");
            icon.classList.add("hidden");
            selected.splice(selected.indexOf(songID), 1);
            updateOrder();
        } else {
            selected.push(songID);
            song.classList.add("bg-green-200");
            icon.classList.remove("hidden");
            icon.innerHTML = selected.indexOf(songID);
        }
        console.log(selected);
    }

    function updateOrder() {
        for (let i = 0; i < selected.length; i++) {
            const song = document.getElementById(selected[i]);

            document.getElementById(song.id + "-selected").innerHTML = i;
        }
    }

    // Upon clicking, play buttons should play the first selected song and queue all others
    const playButtons = document.getElementsByClassName("libraryControlsPlay-playButton");
    for (const element in playButtons) {
        if (Object.hasOwnProperty.call(playButtons, element)) {
            const button = playButtons[element];

            button.addEventListener("click", () => {
                queued = "queuing song IDs ";
                for (let i = 0; i < selected.length; i++) {
                    const songID = selected[i];

                    if (i == 0) {
                        console.log("playing song id " + songID);
                    } else if (i < selected.length - 1) {
                        queued += songID + ", ";
                    } else {
                        queued += songID;
                    }
                }
                console.log(queued);
            });
        }
    }

    const queueButtons = document.getElementsByClassName(
        "libraryControlsPlay-queueButton"
    );
    for (const element in queueButtons) {
        if (Object.hasOwnProperty.call(queueButtons, element)) {
            const button = queueButtons[element];

            button.addEventListener("click", () => {
                queued = "queuing song IDs ";
                for (let i = 0; i < selected.length; i++) {
                    const songID = selected[i];

                    if (i < selected.length - 1) {
                        queued += songID + ", ";
                    } else {
                        queued += songID;
                    }
                }
                console.log(queued);
            });
        }
    }
});
