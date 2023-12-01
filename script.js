var songList = [
    {
        title: "Cypress",
        artist: "Sarah Kinsley",
        image: "./assets/albums/cypress.jpg",
    },
    {
        title: "Finish Line",
        artist: "Delaney Bailey",
        image: "./assets/albums/finish-line.jpg",
    },
    {
        title: "Green",
        artist: "Sarah Kinsley",
        image: "./assets/albums/cypress.jpg",
    },
    {
        title: "Lucky Drive",
        artist: "Sarah Kinsley",
        image: "./assets/albums/cypress.jpg",
    },
    {
        title: "My Love Mine All Mine",
        artist: "Mitski",
        image: "./assets/songs/my-love.jpg",
    },
    {
        title: "Sliver of Time",
        artist: "Sarah Kinsley",
        image: "./assets/albums/ascension.jpg",
    },
    {
        title: "Starships",
        artist: "Nicki Minaj",
        image: "./assets/songs/pink-friday.png",
    },
];

var playlistList = [
    {
        title: "Study Vibes",
        creator: "Me",
        image: "./assets/playlists/study-vibes.jpg",
        songList: [
            {
                title: "Green",
                artist: "Sarah Kinsley",
                image: "./assets/albums/cypress.jpg",
            },
            {
                title: "My Love Mine All Mine",
                artist: "Mitski",
                image: "./assets/songs/my-love.jpg",
            },
            {
                title: "The Christmas Waltz",
                artist: "Laufey",
                image: "./assets/albums/a-very-laufey-holiday.jpg",
            },
        ],
    },
];

var albumList = [
    {
        title: "Ascension",
        artist: "Sarah Kinsley",
        image: "./assets/albums/ascension.jpg",
        songList: [
            {
                title: "Oh No Darling!",
                artist: "Sarah Kinsley",
                image: "./assets/albums/ascension.jpg",
            },
            {
                title: "Black Horse",
                artist: "Sarah Kinsley",
                image: "./assets/albums/ascension.jpg",
            },
            {
                title: "Ascension",
                artist: "Sarah Kinsley",
                image: "./assets/albums/ascension.jpg",
            },
            {
                title: "Lovegod",
                artist: "Sarah Kinsley",
                image: "./assets/albums/ascension.jpg",
            },
            {
                title: "Sliver of Time",
                artist: "Sarah Kinsley",
                image: "./assets/albums/ascension.jpg",
            },
        ],
    },
    {
        title: "A Very Laufey Holiday!",
        artist: "Laufey",
        image: "./assets/albums/a-very-laufey-holiday.jpg",
        songList: [
            {
                title: "Christmas Dreaming",
                artist: "Laufey",
                image: "./assets/albums/a-very-laufey-holiday.jpg",
            },
            {
                title: "The Christmas Waltz",
                artist: "Laufey",
                image: "./assets/albums/a-very-laufey-holiday.jpg",
            },
            {
                title: "Love to Keep Me Warm",
                artist: "Laufey, dodie",
                image: "./assets/albums/a-very-laufey-holiday.jpg",
            },
        ],
    },
    {
        title: "Coffee Stained Smile",
        artist: "Delaney Bailey",
        image: "./assets/albums/coffee-stained-smile.jpg",
        songList: [
            {
                title: "Coffee Stained Smile",
                artist: "Delaney Bailey",
                image: "./assets/albums/coffee-stained-smile.jpg",
            },
        ],
    },
    {
        title: "Cypress",
        artist: "Sarah Kinsley",
        image: "./assets/albums/cypress.jpg",
        songList: [
            {
                title: "Hills of Fire",
                artist: "Sarah Kinsley",
                image: "./assets/albums/cypress.jpg",
            },
            {
                title: "What Was Mine",
                artist: "Sarah Kinsley",
                image: "./assets/albums/cypress.jpg",
            },
            {
                title: "Green",
                artist: "Sarah Kinsley",
                image: "./assets/albums/cypress.jpg",
            },
            {
                title: "Cypress",
                artist: "Sarah Kinsley",
                image: "./assets/albums/cypress.jpg",
            },
            {
                title: "Lucky Drive",
                artist: "Sarah Kinsley",
                image: "./assets/albums/cypress.jpg",
            },
        ],
    },
    {
        title: "Finish Line",
        artist: "Delaney Bailey",
        image: "./assets/albums/finish-line.jpg",
        songList: [
            {
                title: "Finish Line",
                artist: "Delaney Bailey",
                image: "./assets/albums/finish-line.jpg",
            },
        ],
    },
    {
        title: "Perfect Night",
        artist: "LE SSERAFIM",
        image: "./assets/albums/perfect-night.jpg",
        songList: [
            {
                title: "Perfect Night",
                artist: "LE SSERAFIM",
                image: "./assets/albums/perfect-night.jpg",
            },
        ],
    },
];

var artistList = [
    {
        name: "Sarah Kinsley",
        image: "./assets/artists/sarah-kinsley.jpg",
        discography: [
            {
                title: "Ascension",
                artist: "Sarah Kinsley",
                image: "./assets/albums/ascension.jpg",
                songList: [
                    {
                        title: "Oh No Darling!",
                        artist: "Sarah Kinsley",
                        image: "./assets/albums/ascension.jpg",
                    },
                    {
                        title: "Black Horse",
                        artist: "Sarah Kinsley",
                        image: "./assets/albums/ascension.jpg",
                    },
                    {
                        title: "Ascension",
                        artist: "Sarah Kinsley",
                        image: "./assets/albums/ascension.jpg",
                    },
                    {
                        title: "Lovegod",
                        artist: "Sarah Kinsley",
                        image: "./assets/albums/ascension.jpg",
                    },
                    {
                        title: "Sliver of Time",
                        artist: "Sarah Kinsley",
                        image: "./assets/albums/ascension.jpg",
                    },
                ],
            },
            {
                title: "Cypress",
                artist: "Sarah Kinsley",
                image: "./assets/albums/cypress.jpg",
                songList: [
                    {
                        title: "Hills of Fire",
                        artist: "Sarah Kinsley",
                        image: "./assets/albums/cypress.jpg",
                    },
                    {
                        title: "What Was Mine",
                        artist: "Sarah Kinsley",
                        image: "./assets/albums/cypress.jpg",
                    },
                    {
                        title: "Green",
                        artist: "Sarah Kinsley",
                        image: "./assets/albums/cypress.jpg",
                    },
                    {
                        title: "Cypress",
                        artist: "Sarah Kinsley",
                        image: "./assets/albums/cypress.jpg",
                    },
                    {
                        title: "Lucky Drive",
                        artist: "Sarah Kinsley",
                        image: "./assets/albums/cypress.jpg",
                    },
                ],
            },
        ],
    },
];

/**
 * MUSIC PLAYER
 */

var playerTitle = $("#current-song-title");
var playerArtist = $("#current-song-artist");
var record = $("#player-record");
var play = $(".player-play-button");
var pause = $(".player-pause-button");
var progress = document.getElementById("player-progress-bar");
var isPaused = true;
var time = 0;
var duration = progress.max;
var angle = 0;
const ANGLE_INC = 12; //angle/sec record rotates

//change progress bar
window.setInterval(function () {
    if (!isPaused) {
        time++;
        angle += ANGLE_INC;
        progress.value = time;
        if (time > duration) {
            playNext();
            playing();
        }
    }
}, 1000);

//set time to current progress bar value
progress.addEventListener("change", function () {
    time = progress.value;
    if (time == 0) {
        changeSong();
        console.log(isPaused);
    } else {
        record.velocity("stop", true);
        record.velocity({
            rotateZ: parseInt((angle + time * ANGLE_INC) % 360) + "deg",
        });
    }
    if (!isPaused) {
        console.log("not paused");
        playing();
    }
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
    record.velocity("stop", true);
    record.velocity({ rotateZ: "0deg" });
    playerTitle.text("Title");
    playerArtist.text("Artist");
}

//reset record and display pause button
function changeSong(title, artist, path) {
    reset();
    pause.css("display", "block");
    play.css("display", "none");
    playing();
    playerTitle.text(title);
    playerArtist.text(artist);
    record.attr("src", path);
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
// TODO make rewind and skip buttons unique
// TODO preserve song data on rewind
// TODO change song to next in queue or reset on emptyt
$(".change-song").click(function () {
    changeSong();
    playing();
});

/**
 * PAGE NAVIGATION
 */

// page history
const historyStack = [];

// Subsections
const librarySubsection = document.getElementById("library-subsection");
const friendsSubsection = document.getElementById("friends-subsection");
const settingsSubsection = document.getElementById("settings-subsection");
const libraryGrid = document.getElementById("library-grid");

// Navbar buttons
const libraryButton = document.getElementById("library-button");
const friendsButton = document.getElementById("friends-button");
const settingsButton = document.getElementById("settings-button");

// Headers
const libraryHeader = document.getElementById("library-bar");
const friendsHeader = document.getElementById("friends-bar");
const settingsHeader = document.getElementById("settings-bar");
const playControls = document.getElementById("libraryControls-play");
const libraryPageHeader = document.getElementById("library-page");

function setPageHeader(pageTitle, revealPlayerButtons = false) {
    libraryPageHeader.classList.remove("hidden");
    document.getElementById("libraryPage-title").textContent = pageTitle;

    if (revealPlayerButtons) {
        playControls.classList.remove("hidden");
    }
}

function changeContent(to, from, content = null, contentParent = null) {
    // Hide all subsections by default
    librarySubsection.classList.add("hidden");
    friendsSubsection.classList.add("hidden");
    settingsSubsection.classList.add("hidden");
    libraryGrid.classList.add("hidden");

    libraryHeader.classList.add("hidden");
    friendsHeader.classList.add("hidden");
    settingsHeader.classList.add("hidden");
    libraryPageHeader.classList.add("hidden");
    playControls.classList.add("hidden");

    libraryButton.classList.remove("bg-white", "text-black");
    friendsButton.classList.remove("bg-white", "text-black");
    settingsButton.classList.remove("bg-white", "text-black");

    if (from != null) {
        historyStack.push([from, contentParent]);
    }

    // Show the corresponding subsection based on the selected to
    switch (to) {
        case "library":
            // display the library page
            libraryHeader.classList.remove("hidden");
            librarySubsection.classList.remove("hidden");
            libraryButton.classList.add("bg-white", "text-black");
            historyStack.length = 0; // empty the history queue
            break;
        case "friends":
            // display the friends page
            friendsHeader.classList.remove("hidden");
            friendsSubsection.classList.remove("hidden");
            friendsButton.classList.add("bg-white", "text-black");
            historyStack.length = 0; // empty the history queue
            break;
        case "settings":
            // display the settings page
            settingsHeader.classList.remove("hidden");
            settingsSubsection.classList.remove("hidden");
            settingsButton.classList.add("bg-white", "text-black");
            historyStack.length = 0; // empty the history queue
            break;
        case "liked-songs":
            // display the liked songs page
            loadSongs(content);
            libraryGrid.classList.remove("hidden");
            setPageHeader("Liked Songs", true);
            // likedSongsHeader.classList.remove("hidden");
            break;
        case "playlists":
            // display the playlists page
            loadPlaylists();
            libraryGrid.classList.remove("hidden");
            setPageHeader("Playlists");
            break;
        case "playlist":
            // display the page of a single playlist
            loadSongs(content.songList);
            libraryGrid.classList.remove("hidden");
            setPageHeader(content.title, true);
            break;
        case "albums":
            // display the albums page
            loadAlbums();
            libraryGrid.classList.remove("hidden");
            setPageHeader("Albums");
            break;
        case "album":
            // display the page of a single album
            loadSongs(content.songList);
            libraryGrid.classList.remove("hidden");
            setPageHeader(content.title, true);
            break;
        case "artists":
            // display the artists page
            loadArtists();
            libraryGrid.classList.remove("hidden");
            setPageHeader("Artists");
            break;
        case "artist":
            // display the page of a single artist
            loadDiscography(content.discography, content);
            libraryGrid.classList.remove("hidden");
            setPageHeader(content.name);
            break;
        case "back":
            // go to the last navigated page
            lastPage = historyStack.pop();
            if (lastPage != undefined) {
                if (lastPage[0] == "artist") {
                    console.log(lastPage);
                    changeContent(lastPage[0], null, lastPage[1]);
                } else {
                    changeContent(lastPage[0], null);
                }
            }
            break;
    }
}

/**
 * PAGE POPULATION
 */

function loadSongs(list) {
    libraryGrid.innerHTML = "";

    let i = 0;
    list.forEach((song) => {
        const songBox = document.createElement("div");
        songBox.id = "grid-song-" + i;
        songBox.className =
            "grid-song relative w-full p-2 xl:p-4 rounded-md hover:cursor-pointer hover:bg-green-100";
        songBox.setAttribute("title", song.title);
        songBox.setAttribute("artist", song.artist);
        songBox.setAttribute("cover", song.image);
        songBox.addEventListener("click", toggleSelect.bind(this, songBox.id, song));

        const songCover = document.createElement("img");
        songCover.src = song.image;
        songCover.id = "grid-song-" + i + "-cover";
        songCover.className = "hidden md:block max-w-[200px] w-full mb-4 rounded-md";

        //song info
        const songLabel = document.createElement("div");
        songLabel.className = "whitespace-nowrap overflow-hidden";

        //title
        const title = document.createElement("p");
        title.className = "text-base md:text-lg lg:text-xl text-ellipsis overflow-hidden";
        title.textContent = song.title;

        //artist
        const artist = document.createElement("p");
        artist.className =
            "text-sm md:text-base lg:text-lg text-ellipsis overflow-hidden";
        artist.textContent = song.artist;

        // selection position
        const selectIcon = document.createElement("div");
        selectIcon.id = "grid-song-" + i + "-selected";
        selectIcon.className =
            "hidden absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-yellow-300 rounded-full";

        songBox.appendChild(songCover);

        songLabel.appendChild(title);
        songLabel.appendChild(artist);
        songBox.appendChild(songLabel);
        songBox.appendChild(selectIcon);

        libraryGrid.appendChild(songBox);
        i++;
    });
}

function loadPlaylists() {
    libraryGrid.innerHTML = "";

    let i = 0;
    playlistList.forEach((playlist) => {
        const playlistBox = document.createElement("div");
        playlistBox.id = "playlist-" + i;
        playlistBox.className =
            "p-2 xl:p-4 rounded-md hover:cursor-pointer hover:bg-green-100";
        playlistBox.addEventListener(
            "click",
            changeContent.bind(this, "playlist", "playlists", playlist)
        );

        // playlist cover
        const playlistCover = document.createElement("img");
        playlistCover.src = playlist.image;
        playlistCover.className = "hidden md:block w-full mb-4 rounded-md";

        // playlist info
        const playlistLabel = document.createElement("div");
        playlistLabel.className = "whitespace-nowrap overflow-hidden";

        //title
        const playlistTitle = document.createElement("p");
        playlistTitle.className =
            "text-base md:text-lg lg:text-xl text-ellipsis overflow-hidden";
        playlistTitle.textContent = playlist.title;

        //artist
        const playlistCreator = document.createElement("p");
        playlistCreator.className =
            "text-sm md:text-base lg:text-lg text-ellipsis overflow-hidden";
        playlistCreator.textContent = playlist.creator;

        playlistBox.appendChild(playlistCover);

        playlistLabel.appendChild(playlistTitle);
        playlistLabel.appendChild(playlistCreator);

        playlistBox.appendChild(playlistLabel);
        libraryGrid.appendChild(playlistBox);
        i++;
    });
}

function loadAlbums() {
    libraryGrid.innerHTML = "";

    let i = 0;
    albumList.forEach((album) => {
        const albumBox = document.createElement("div");
        albumBox.id = "album-" + i;
        albumBox.className =
            "p-2 xl:p-4 rounded-md hover:cursor-pointer hover:bg-green-100";
        albumBox.addEventListener(
            "click",
            changeContent.bind(this, "album", "albums", album)
        );

        // playlist cover
        const albumCover = document.createElement("img");
        albumCover.src = album.image;
        albumCover.className = "hidden md:block w-full mb-4 rounded-md";

        // playlist info
        const albumLabel = document.createElement("div");
        albumLabel.className = "whitespace-nowrap overflow-hidden";

        //title
        const albumTitle = document.createElement("p");
        albumTitle.className =
            "text-base md:text-lg lg:text-xl text-ellipsis overflow-hidden";
        albumTitle.textContent = album.title;

        //artist
        const albumArtist = document.createElement("p");
        albumArtist.className =
            "text-sm md:text-base lg:text-lg text-ellipsis overflow-hidden";
        albumArtist.textContent = album.artist;

        albumBox.appendChild(albumCover);

        albumLabel.appendChild(albumTitle);
        albumLabel.appendChild(albumArtist);

        albumBox.appendChild(albumLabel);
        libraryGrid.appendChild(albumBox);
        i++;
    });
}

function loadArtists() {
    libraryGrid.innerHTML = "";

    let i = 0;
    artistList.forEach((artist) => {
        const artistBox = document.createElement("div");
        artistBox.id = "artist-" + i;
        artistBox.className =
            "p-2 xl:p-4 rounded-md hover:cursor-pointer hover:bg-green-100";
        artistBox.addEventListener(
            "click",
            changeContent.bind(this, "artist", "artists", artist)
        );

        // playlist cover
        const artistCover = document.createElement("img");
        artistCover.src = artist.image;
        artistCover.className = "hidden md:block w-full mb-4 rounded-full";

        // playlist info
        const artistLabel = document.createElement("div");
        artistLabel.className = "whitespace-nowrap overflow-hidden";

        //artist
        const name = document.createElement("p");
        name.className = "text-base md:text-lg lg:text-xl text-ellipsis overflow-hidden";
        name.textContent = artist.name;

        artistBox.appendChild(artistCover);

        artistLabel.appendChild(name);

        artistBox.appendChild(artistLabel);
        libraryGrid.appendChild(artistBox);
    });
}

function loadDiscography(discography, artist) {
    libraryGrid.innerHTML = "";

    let i = 0;
    discography.forEach((album) => {
        const albumBox = document.createElement("div");
        albumBox.id = "disco-" + i;
        albumBox.className =
            "p-2 xl:p-4 rounded-md hover:cursor-pointer hover:bg-green-100";
        albumBox.addEventListener(
            "click",
            changeContent.bind(this, "album", "artist", album, artist)
        );

        // playlist cover
        const albumCover = document.createElement("img");
        albumCover.src = album.image;
        albumCover.className = "w-full mb-4 rounded-md";

        // playlist info
        const albumLabel = document.createElement("div");
        albumLabel.className = "whitespace-nowrap overflow-hidden";

        //title
        const albumTitle = document.createElement("p");
        albumTitle.className =
            "text-base md:text-lg lg:text-xl text-ellipsis overflow-hidden";
        albumTitle.textContent = album.title;

        //artist
        const albumArtist = document.createElement("p");
        albumArtist.className =
            "text-sm md:text-base lg:text-lg text-ellipsis overflow-hidden";
        albumArtist.textContent = album.artist;

        albumBox.appendChild(albumCover);

        albumLabel.appendChild(albumTitle);
        albumLabel.appendChild(albumArtist);

        albumBox.appendChild(albumLabel);
        libraryGrid.appendChild(albumBox);
        i++;
    });
}

function loadPreviews(areaID) {
    const PREVIEW_SIZE = 8;
    // populate the liked song preview
    const area = document.getElementById(areaID + "-area");

    const header = document.createElement("div");
    header.className = "flex flex-row justify-start items-center gap-x-4";

    const areaName = document.createElement("h3");
    areaName.className = "text-xl md:text-3xl font-bold mb-4";
    switch (areaID) {
        case "liked-songs":
            areaName.textContent = "Liked Songs";
            break;
        case "playlists":
            areaName.textContent = "Playlists";
            break;
        case "albums":
            areaName.textContent = "Albums";
            break;
        case "artists":
            areaName.textContent = "Artists";
            break;
    }

    const preview = document.createElement("div");

    preview.id = areaID + "-preview";
    preview.className = "flex flex-row justify-start gap-x-2 md:gap-x-4";
    preview.className =
        "grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[1440px]:grid-cols-5 min-[1640px]:grid-cols-6 min-[1800px]:grid-cols-7 gap-x-4";

    const more = document.createElement("button");
    more.type = "button";
    more.className =
        "w-16 h-fit px-2 flex justify-center text-base rounded-full bg-zinc-200 hover:bg-green-300 mb-2.5";
    more.addEventListener("click", changeContent.bind(this, areaID, "library", songList));
    more.innerHTML = '<i data-feather="more-horizontal"></i>';

    header.appendChild(areaName);
    header.appendChild(more);

    let list = null;
    switch (areaID) {
        case "liked-songs":
            list = songList;
            break;
        case "playlists":
            list = playlistList;
            break;
        case "albums":
            list = albumList;
            break;
        case "artists":
            list = artistList;
            break;
    }

    for (let i = 0; i < Math.min(PREVIEW_SIZE, list.length); i++) {
        let item = list[i]; // song json

        const box = document.createElement("div");
        box.className =
            "max-w-[200px] lg:max-w-none h-fit p-4 rounded-lg hover:cursor-pointer hover:bg-green-100";

        switch (i) {
            case 7:
                box.className += " hidden min-[2000px]:block";
                break;
            case 6:
                box.className += " hidden min-[1800px]:block";
                break;
            case 5:
                box.className += " hidden min-[1640px]:block";
                break;
            case 4:
                box.className += " hidden min-[1440px]:block";
                break;
            case 3:
                box.className += " hidden xl:block";
                break;
            case 2:
                box.className += " hidden lg:block";
                break;
            case 1:
                box.className += " hidden md:block";
        }

        const cover = document.createElement("img");
        cover.src = item.image;
        cover.className = "w-full mb-4";

        if (areaID == "artists") {
            cover.className += " rounded-full";
        } else {
            cover.className += " rounded-md";
        }

        box.appendChild(cover);

        //song info
        const label = document.createElement("div");
        label.className = "whitespace-nowrap overflow-hidden";

        //title
        const title = document.createElement("p");
        title.className = "text-base md:text-lg lg:text-xl text-ellipsis overflow-hidden";

        if (areaID != "artists") {
            title.textContent = item.title;
            label.appendChild(title);
            //artist
            const artist = document.createElement("p");
            artist.className =
                "text-sm md:text-base lg:text-lg text-ellipsis overflow-hidden";
            artist.textContent = item.artist;
            label.appendChild(artist);
        } else {
            title.textContent = item.name;
            label.appendChild(title);
        }

        box.appendChild(label);

        switch (areaID) {
            case "liked-songs":
                // placeholder event listener for playing the song
                box.addEventListener(
                    "click",
                    changeSong.bind(this, item.title, item.artist, item.image)
                );
                break;
            case "playlists":
                // open the playlist
                box.addEventListener(
                    "click",
                    changeContent.bind(this, "playlist", "library", item)
                );
                break;
            case "albums":
                // open the playlist
                box.addEventListener(
                    "click",
                    changeContent.bind(this, "album", "library", item)
                );
                break;
            case "artists":
                // open the playlist
                box.addEventListener(
                    "click",
                    changeContent.bind(this, "artist", "library", item)
                );
                break;
        }

        preview.appendChild(box);
    }

    area.appendChild(header);
    area.appendChild(preview);
}

const selected = []; // queue of selected songs

function toggleSelect(songID) {
    if (selected.includes(songID)) {
        deselect(songID);
        selected.splice(selected.indexOf(songID), 1);
        updateOrder();
    } else {
        select(songID);
    }
}

function select(songID) {
    const songBox = document.getElementById(songID);
    const icon = document.getElementById(songID + "-selected");
    selected.push(songID);
    songBox.classList.add("bg-green-200");
    icon.classList.remove("hidden");
    icon.innerHTML = selected.indexOf(songID) + 1;
}

function deselect(songID) {
    const songBox = document.getElementById(songID);
    const icon = document.getElementById(songID + "-selected");
    songBox.classList.remove("bg-green-200");
    icon.classList.add("hidden");
}

function updateOrder() {
    for (let i = 0; i < selected.length; i++) {
        const song = document.getElementById(selected[i]);
        document.getElementById(song.id + "-selected").innerHTML = i + 1;
    }
}

// Upon clicking, play buttons should play the first selected song and queue all others
const playButton = document.getElementById("libraryControlsPlay-playButton");
const queueButton = document.getElementById("libraryControlsPlay-queueButton");
playButton.addEventListener("click", () => {
    let song = selected.shift();
    let songBox = document.getElementById(song);

    // TODO pass song json object
    changeSong(
        songBox.getAttribute("title"),
        songBox.getAttribute("artist"),
        songBox.getAttribute("cover")
    );
    deselect(song);

    while (selected.length > 0) {
        song = selected.shift();
        deselect(song);
    }

    updateOrder();
});

queueButton.addEventListener("click", () => {
    for (let i = 0; i < selected.length; i++) {
        const song = selected[i];
    }
});

// Intitial state
libraryButton.classList.add("bg-white", "text-black");

loadPreviews("liked-songs");
loadPreviews("playlists");
loadPreviews("albums");
loadPreviews("artists");

reset(); // reset player
feather.replace(); // Set the more button icons

//QUEUE SECTION ______________________________________________________________________________________________
var songsInQueue = [
    { title: 'Jingle Bell Rock',                        artist: 'Brenda Lee',    image: './assets/jingleBellRock.jpg' },
    { title: 'Let It Snow! Let it Snow! Let It Snow!', artist: 'Frank Sinatra', image: './assets/let-it-snow.jpg' },
    { title: 'Santa Claus Is Coming To Town',           artist: 'The Jackson 5', image: './assets/Jackson5-ChristmasAlbum.jpg' },
  ];
  
  function expandQueue () {
    var smallqueue = document.getElementById('small-queue');
    var largequeue = document.getElementById('expanded-queue');
    var queuecontainer = document.getElementById('queue-container');
    var playContainer = document.getElementById('music-player-container');
    var expandButton = document.getElementById('expandButton');
    //var hideButton = document.getElementById('backButton');

    smallqueue.classList.add('hidden');
    expandButton.classList.add('hidden');
    playContainer.classList.add('hidden');
    //hideButton.classList.remove('hidden');
    largequeue.classList.remove('hidden');
    queuecontainer.classList.remove('row-span-1');
    queuecontainer.classList.add('row-span-4');
    //queuecontainer.classList.add('overflow-y-scroll');
    loadSongsInQueue();

}

function backToHome () {
    var smallqueue = document.getElementById('small-queue');
    var largequeue = document.getElementById('expanded-queue');
    var queuecontainer = document.getElementById('queue-container');
    var playContainer = document.getElementById('music-player-container');
    var expandButton = document.getElementById('expandButton');
    //var hideButton = document.getElementById('backButton');

    smallqueue.classList.remove('hidden');
    expandButton.classList.remove('hidden');
    playContainer.classList.remove('hidden');
    //hideButton.classList.add('hidden');
    largequeue.classList.add('hidden');
    queuecontainer.classList.add('row-span-1');
    queuecontainer.classList.remove('row-span-4');
    //queuecontainer.classList.remove('overflow-y-scroll');
    loadHomePage();
}
  function loadHomePage()
  {
    var container = document.getElementById('queueHomeSongBoxes');
    container.innerHTML = "";
    checkEmpty();
 
    for(var i =0; i<Math.min(3,songsInQueue.length);i++)
    {
        var song = songsInQueue[i]
        var songBox = document.createElement("div");
        songBox.className = "w-20 mr-auto hover:cursor-grab";
       
        var songImg = document.createElement("img");
        songImg.src = song.image;
        songImg.className = "w-16 h-16 rounded";
        
       //song info
       var songInfo = document.createElement('div');
       songInfo.className = "w-full whitespace-nowrap overflow-hidden"

       //title
       var title = document.createElement('p');
       title.className = 'font-semibold text-xs md:text-sm lg:text-base text-ellipsis overflow-hidden' ;
       title.textContent = song.title;
       
       //artist
       var artist = document.createElement('p');
       artist.className = 'text-gray-500 text-xs lg:text-sm text-ellipsis overflow-hidden';
       artist.textContent = song.artist;

        songBox.appendChild(songImg);
        songInfo.appendChild(title);
        songInfo.appendChild(artist);
        songBox.appendChild(songInfo);

        container.appendChild(songBox)
    }
    
    new Sortable(container, {
        animation: 200,
        sort: true,

        //Update index when dropped
        onEnd: function (evt) {
            songsInQueue = songsInQueue.filter(function( element ) {
                return element !== undefined;
             });
            var newIndex = evt.newIndex;
    
            // Remove the item from the old position
            var removedSong = songsInQueue.splice(evt.oldIndex, 1)[0];
        
            // Insert the item at the new position
            songsInQueue.splice(newIndex, 0, removedSong);

            //console.log(songsInQueue)
        },
        removeOnSpill:true,
        onSpill: function (evt) {
            
            var ind = evt.oldIndex;
            if (ind > -1)
            {
           
                songsInQueue.splice(ind,1);
                
            }
            
            checkEmpty();
        },

    
      });
  }

  function checkEmpty()
  {
    var empty1 = document.getElementById('empty-queue1');
      var empty2 = document.getElementById('empty-queue2');

      songsInQueue = songsInQueue.filter(function( element ) {
        return element !== undefined;
     });
      if( songsInQueue.length==0)
      {
        
        empty1.classList.remove('hidden');

       
        empty2.classList.remove('hidden');
      }
      else
      {
        empty1.classList.add('hidden')
        empty2.classList.add('hidden')
      }
  }

  function loadSongsInQueue()
  {
      //console.log(songsInQueue)
      var container = document.getElementById('songBoxes');

      container.innerHTML = "";
      checkEmpty();
      songsInQueue.forEach(song => {
          var songBox = document.createElement("div");
          songBox.className = "flex items-center mb-5 h-20 border-double border-2 hover:cursor-grab hover:border-dashed select-none";
         
          var songImg = document.createElement("img");
          songImg.src = song.image;
          songImg.className = "w-16 h-16 mr-2";
          
          //song info
          var songInfo = document.createElement('div');
          songInfo.className = "w-full whitespace-nowrap overflow-hidden"

          //title
          var title = document.createElement('p');
          title.className = 'font-semibold text-xs md:text-sm lg:text-base text-ellipsis overflow-hidden' ;
          title.textContent = song.title;
          
          //artist
          var artist = document.createElement('p');
          artist.className = 'text-gray-500 text-xs lg:text-sm text-ellipsis overflow-hidden';
          artist.textContent = song.artist;

          songBox.appendChild(songImg);

          songInfo.appendChild(title);
          songInfo.appendChild(artist);
          songBox.appendChild(songInfo);

          container.appendChild(songBox)
      });

      new Sortable(container, {
        animation: 200,
        sort: true,

        //Update index when dropped
        onEnd: function (evt) {
            songsInQueue = songsInQueue.filter(function( element ) {
                return element !== undefined;
             });
            var newIndex = evt.newIndex;
    
            // Remove the item from the old position
            var removedSong = songsInQueue.splice(evt.oldIndex, 1)[0];
        
            // Insert the item at the new position
            songsInQueue.splice(newIndex, 0, removedSong);

            //console.log(songsInQueue)
        },
        removeOnSpill:true,
        onSpill: function (evt) {
            
            var ind = evt.oldIndex;
            if (ind > -1)
            {
           
                songsInQueue.splice(ind,1);
                
            }
            
            checkEmpty();
        },

    
      });

  }

  function clickedClear()
  {
      songsInQueue = [];
      loadSongsInQueue();
  }

  function addSong(song)
  {
      songsInQueue.push(song)
      loadSongsInQueue();
  }
  
  function playNext()
  {
    console.log(songsInQueue)
    if(songsInQueue.length>0)
    {
        topSong = songsInQueue.shift();
        changeSong(topSong.title, topSong.artist, topSong.image);
        
        loadHomePage();
       
    }
    //if there are no more songs, skip to the end of the song
    else
    {
        paused();
    }
    
  }
  loadHomePage();
