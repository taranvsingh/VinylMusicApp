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

// page history
const historyStack = [];

// Subsections
const librarySubsection = document.getElementById("library-subsection");
const friendsSubsection = document.getElementById("friends-subsection");
const settingsSubsection = document.getElementById("settings-subsection");
const songGrid = document.getElementById("song-grid");
const playlistsSubsection = document.getElementById("playlists-subsection");
const albumsSubsection = document.getElementById("albums-subsection");
const artistsSubsection = document.getElementById("artists-subsection");
const discoSubsection = document.getElementById("discography-subsection");

// Navbar buttons
const libraryButton = document.getElementById("library-button");
const friendsButton = document.getElementById("friends-button");
const settingsButton = document.getElementById("settings-button");

// Headers
const libraryHeader = document.getElementById("library-bar");
const friendsHeader = document.getElementById("friends-bar");
const settingsHeader = document.getElementById("settings-bar");
const likedSongsHeader = document.getElementById("liked-songs-bar");
const playlistsHeader = document.getElementById("playlists-bar");
const playlistHeader = document.getElementById("playlist-bar");
const albumsHeader = document.getElementById("albums-bar");
const albumHeader = document.getElementById("album-bar");
const artistsHeader = document.getElementById("artists-bar");
const artistHeader = document.getElementById("artist-bar");

function changeContent(to, from, content = null) {
    // Hide all subsections by default
    librarySubsection.classList.add("hidden");
    friendsSubsection.classList.add("hidden");
    settingsSubsection.classList.add("hidden");
    songGrid.classList.add("hidden");
    playlistsSubsection.classList.add("hidden");
    albumsSubsection.classList.add("hidden");
    artistsSubsection.classList.add("hidden");
    discoSubsection.classList.add("hidden");

    libraryHeader.classList.add("hidden");
    friendsHeader.classList.add("hidden");
    settingsHeader.classList.add("hidden");
    likedSongsHeader.classList.add("hidden");
    playlistsHeader.classList.add("hidden");
    playlistHeader.classList.add("hidden");
    albumsHeader.classList.add("hidden");
    albumHeader.classList.add("hidden");
    artistsHeader.classList.add("hidden");
    artistHeader.classList.add("hidden");

    libraryButton.classList.remove("bg-white", "text-black");
    friendsButton.classList.remove("bg-white", "text-black");
    settingsButton.classList.remove("bg-white", "text-black");

    if (from != null) {
        historyStack.push(from);
    }

    console.log(to, from, content);

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
            songGrid.classList.remove("hidden");
            likedSongsHeader.classList.remove("hidden");
            break;
        case "playlists":
            // display the playlists page
            loadPlaylists();
            playlistsSubsection.classList.remove("hidden");
            playlistsHeader.classList.remove("hidden");
            break;
        case "playlist":
            // display the page of a single playlist
            // console.log(content);
            loadSongs(content);
            songGrid.classList.remove("hidden");
            playlistHeader.classList.remove("hidden");
            break;
        case "albums":
            // display the albums page
            loadAlbums();
            albumsSubsection.classList.remove("hidden");
            albumsHeader.classList.remove("hidden");
            break;
        case "album":
            // display the page of a single album
            loadSongs(content);
            songGrid.classList.remove("hidden");
            albumHeader.classList.remove("hidden");
            break;
        case "artists":
            // display the artists page
            loadArtists();
            artistsSubsection.classList.remove("hidden");
            artistsHeader.classList.remove("hidden");
            break;
        case "artist":
            // display the page of a single artist
            loadDiscography(content);
            discoSubsection.classList.remove("hidden");
            artistHeader.classList.remove("hidden");
            break;
        case "back":
            // go to the last navigated page
            lastPage = historyStack.pop();
            if (lastPage != undefined) {
                changeContent(lastPage, null);
            }
            break;
    }
}
// Intitial state
libraryButton.classList.add("bg-white", "text-black");

function loadSongs(list) {
    const songGrid = document.getElementById("song-grid");
    songGrid.innerHTML = "";

    i = 0;
    list.forEach((song) => {
        const songBox = document.createElement("div");
        songBox.id = "grid-song-" + i;
        songBox.className =
            "grid-song relative w-full p-2 xl:p-4 rounded-md hover:cursor-pointer hover:bg-green-100";

        const songCover = document.createElement("img");
        songCover.src = song.image;
        songCover.className = "w-full mb-4 rounded-md";

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

        songGrid.appendChild(songBox);
        i++;
    });
}

function loadPlaylists() {
    const playlistGrid = document.getElementById("playlists-subsection");
    playlistGrid.innerHTML = "";

    i = 0;
    playlistList.forEach((playlist) => {
        const playlistBox = document.createElement("div");
        playlistBox.id = "playlist-" + i;
        playlistBox.className =
            "p-2 xl:p-4 rounded-md hover:cursor-pointer hover:bg-green-100";
        playlistBox.addEventListener(
            "click",
            changeContent.bind(this, "playlist", "playlists", playlist.songList)
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
        playlistGrid.appendChild(playlistBox);
        i++;
    });
}

function loadAlbums() {
    const albumGrid = document.getElementById("albums-subsection");
    albumGrid.innerHTML = "";

    i = 0;
    albumList.forEach((album) => {
        const albumBox = document.createElement("div");
        albumBox.id = "album-" + i;
        albumBox.className =
            "p-2 xl:p-4 rounded-md hover:cursor-pointer hover:bg-green-100";
        albumBox.addEventListener(
            "click",
            changeContent.bind(this, "album", "albums", album.songList)
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
        albumGrid.appendChild(albumBox);
        i++;
    });
}

function loadArtists() {
    const artistGrid = document.getElementById("artists-subsection");
    artistGrid.innerHTML = "";

    i = 0;
    artistList.forEach((artist) => {
        const artistBox = document.createElement("div");
        artistBox.id = "artist-" + i;
        artistBox.className =
            "p-2 xl:p-4 rounded-md hover:cursor-pointer hover:bg-green-100";
        artistBox.addEventListener(
            "click",
            changeContent.bind(this, "artist", "artists", artist.discography)
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
        artistGrid.appendChild(artistBox);
    });
}

function loadDiscography(discography) {
    const discGrid = document.getElementById("discography-subsection");

    i = 0;
    discography.forEach((album) => {
        const albumBox = document.createElement("div");
        albumBox.id = "disco-" + i;
        albumBox.className =
            "p-2 xl:p-4 rounded-md hover:cursor-pointer hover:bg-green-100";
        albumBox.addEventListener(
            "click",
            changeContent.bind(this, "album", "artist", album.songList)
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
        discGrid.appendChild(albumBox);
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
    areaName.className = "text-3xl font-bold mb-4";
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

    // container for preview and more button
    const container = document.createElement("div");
    // container.className = "w-fit flex flex-row justify-start items-center";

    const preview = document.createElement("div");

    preview.id = areaID + "-preview";
    preview.className = "flex flex-row justify-start gap-x-4 mr-4";
    preview.className =
        "grid grid-rows-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[1440px]:grid-cols-5 min-[1640px]:grid-cols-6 min-[1800px]:grid-cols-7 min-[2000px]:grid-cols-8 gap-x-4";
    // "grid grid-rows-1 grid-cols-2 min-[880px]:grid-cols-3 lg:grid-cols-4 min-[1440px]:grid-cols-6 min-[1560px]:grid-cols-8 gap-x-4";

    const more = document.createElement("button");
    more.type = "button";
    more.className =
        "w-16 h-fit px-2 text-base rounded-full bg-zinc-200 hover:bg-green-300";
    more.addEventListener("click", changeContent.bind(this, areaID, "library", songList));
    more.textContent = "...";

    header.appendChild(areaName);
    header.appendChild(more);

    list = undefined;
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
        box.id = "preview-song-" + i;
        box.className =
            "h-fit p-4 rounded-lg hover:cursor-pointer hover:bg-green-100 border-2";

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
        }

        const cover = document.createElement("img");
        cover.src = item.image;
        cover.className = "preview-cover w-full mb-4";

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
                box.addEventListener("click", () => {
                    console.log(item.title + " by " + item.artist);
                });
                break;
            case "playlists":
                // open the playlist
                box.addEventListener(
                    "click",
                    changeContent.bind(this, "playlist", "library", item.songList)
                );
                break;
            case "albums":
                // open the playlist
                box.addEventListener(
                    "click",
                    changeContent.bind(this, "album", "library", item.songList)
                );
                break;
            case "artists":
                // open the playlist
                box.addEventListener(
                    "click",
                    changeContent.bind(this, "artist", "library", item.discography)
                );
                break;
        }

        preview.appendChild(box);
    }

    container.appendChild(preview);

    area.appendChild(header);
    area.appendChild(container);
}

loadPreviews("liked-songs");
loadPreviews("playlists");
loadPreviews("albums");
loadPreviews("artists");