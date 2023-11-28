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
        title: "Starshps",
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
                image: "./assets/albums/cypress.jpg",
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
                image: "./assets/albums/cypress.jpg",
            },
            {
                title: "The Christmas Waltz",
                artist: "Laufey",
                image: "./assets/albums/cypress.jpg",
            },
            {
                title: "Love to Keep Me Warm",
                artist: "Laufey, dodie",
                image: "./assets/albums/cypress.jpg",
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

    if (content != null) {
        console.log(content);
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
            songGrid.classList.remove("hidden");
            likedSongsHeader.classList.remove("hidden");
            break;
        case "playlists":
            // display the playlists page
            playlistsSubsection.classList.remove("hidden");
            playlistsHeader.classList.remove("hidden");
            break;
        case "playlist":
            // display the page of a single playlist
            songGrid.classList.remove("hidden");
            playlistHeader.classList.remove("hidden");
            break;
        case "albums":
            // display the albums page
            albumsSubsection.classList.remove("hidden");
            albumsHeader.classList.remove("hidden");
            break;
        case "album":
            // display the page of a single album
            songGrid.classList.remove("hidden");
            albumHeader.classList.remove("hidden");
            break;
        case "artists":
            // display the artists page
            artistsSubsection.classList.remove("hidden");
            artistsHeader.classList.remove("hidden");
            break;
        case "artist":
            // display the page of a single artist
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

    i = 0;
    list.forEach((song) => {
        const songBox = document.createElement("div");
        songBox.id = "grid-song-" + i;
        songBox.className =
            "grid-song relative w-full p-2 rounded hover:cursor-pointer hover:bg-green-100";

        const songCover = document.createElement("img");
        songCover.src = song.image;
        songCover.className = "hidden md:block w-full max-w-xs mb-4 rounded";

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

    i = 0;
    playlistList.forEach((playlist) => {
        const playlistBox = document.createElement("div");
        playlistBox.id = "playlist-" + i;
        playlistBox.className =
            "libraryItem-playlist p-2 rounded hover:cursor-pointer hover:bg-green-100";
        playlistBox.addEventListener(
            "click",
            changeContent.bind("playlist", "playlists", playlist.songList)
        );

        // playlist cover
        const playlistCover = document.createElement("img");
        playlistCover.src = playlist.image;
        playlistCover.className = "library-libraryItem-cover w-28 mb-4 rounded";

        // playlist info
        const playlistLabel = document.createElement("div");
        playlistLabel.className = "library-libraryItem-label w-11/12 whitespace-nowrap";

        //title
        const playlistTitle = document.createElement("p");
        playlistTitle.className =
            "libraryItem-labelTitle text-base md:text-lg lg:text-xl";
        playlistTitle.textContent = playlist.title;

        //artist
        const playlistCreator = document.createElement("p");
        playlistCreator.className =
            "libraryItem-labelArtist text-sm md:text-base lg:text-lg text-ellipsis overflow-hidden";
        playlistCreator.textContent = playlist.creator;

        playlistBox.appendChild(playlistCover);

        playlistLabel.appendChild(playlistTitle);
        playlistLabel.appendChild(playlistCreator);

        playlistBox.appendChild(playlistLabel);
        playlistGrid.appendChild(playlistBox);
    });
}

function loadAlbums() {
    const albumGrid = document.getElementById("albums-subsection");

    i = 0;
    albumList.forEach((album) => {
        const albumBox = document.createElement("div");
        albumBox.id = "album-" + i;
        albumBox.className =
            "libraryItem-album p-2 rounded hover:cursor-pointer hover:bg-green-100";
        albumBox.addEventListener(
            "click",
            changeContent.bind("album", "albums", album.songList)
        );

        // playlist cover
        const albumCover = document.createElement("img");
        albumCover.src = album.image;
        albumCover.className = "library-libraryItem-cover w-28 mb-4 rounded";

        // playlist info
        const albumLabel = document.createElement("div");
        albumLabel.className = "library-libraryItem-label w-11/12 whitespace-nowrap";

        //title
        const albumTitle = document.createElement("p");
        albumTitle.className = "libraryItem-labelTitle text-base md:text-lg lg:text-xl";
        albumTitle.textContent = album.title;

        //artist
        const albumArtist = document.createElement("p");
        albumArtist.className =
            "libraryItem-labelArtist text-sm md:text-base lg:text-lg text-ellipsis overflow-hidden";
        albumArtist.textContent = album.artist;

        albumBox.appendChild(albumCover);

        albumLabel.appendChild(albumTitle);
        albumLabel.appendChild(albumArtist);

        albumBox.appendChild(albumLabel);
        albumGrid.appendChild(albumBox);
    });
}

function loadArtists() {
    const artistGrid = document.getElementById("artists-subsection");

    i = 0;
    artistList.forEach((artist) => {
        const artistBox = document.createElement("div");
        artistBox.id = "artist-" + i;
        artistBox.className =
            "libraryItem-artist p-2 rounded hover:cursor-pointer hover:bg-green-100";
        artistBox.addEventListener(
            "click",
            changeContent.bind("artist", "artists", artist.discography)
        );

        // playlist cover
        const artistCover = document.createElement("img");
        artistCover.src = album.image;
        artistCover.className = "library-libraryItem-cover w-28 mb-4 rounded-full";

        // playlist info
        const artistLabel = document.createElement("div");
        artistLabel.className = "library-libraryItem-label w-11/12 whitespace-nowrap";

        //artist
        const name = document.createElement("p");
        name.className =
            "libraryItem-labelArtist text-base md:text-lg lg:text-xl text-ellipsis overflow-hidden";
        name.textContent = artist.name;

        artistBox.appendChild(artistCover);

        artistLabel.appendChild(artistTitle);
        artistLabel.appendChild(name);

        artistBox.appendChild(artistLabel);
        artistGrid.appendChild(artistBox);
    });
}

function loadDiscography(discography) {
    const discGrid = document.getElementById("albums-subsection");

    i = 0;
    discography.forEach((album) => {
        const albumBox = document.createElement("div");
        albumBox.id = "disco-" + i;
        albumBox.className =
            "libraryItem-album p-2 rounded hover:cursor-pointer hover:bg-green-100";
        albumBox.addEventListener(
            "click",
            changeContent.bind("album", "artist", album.songList)
        );

        // playlist cover
        const albumCover = document.createElement("img");
        albumCover.src = album.image;
        albumCover.className = "library-libraryItem-cover w-28 mb-4 rounded";

        // playlist info
        const albumLabel = document.createElement("div");
        albumLabel.className = "library-libraryItem-label w-11/12 whitespace-nowrap";

        //title
        const albumTitle = document.createElement("p");
        albumTitle.className = "libraryItem-labelTitle text-base md:text-lg lg:text-xl";
        albumTitle.textContent = album.title;

        //artist
        const albumArtist = document.createElement("p");
        albumArtist.className =
            "libraryItem-labelArtist text-sm md:text-base lg:text-lg text-ellipsis overflow-hidden";
        albumArtist.textContent = album.artist;

        albumBox.appendChild(albumCover);

        albumLabel.appendChild(albumTitle);
        albumLabel.appendChild(albumArtist);

        albumBox.appendChild(albumLabel);
        discGrid.appendChild(albumBox);
    });
}

function loadPreviews(areaID) {
    const PREVIEW_SIZE = 5;
    // populate the liked song preview
    const area = document.getElementById("liked-songs-area");
    // const area = document.getElementById(areaID + '-area');

    const header = document.createElement("h3");
    header.className = "text-3xl font-bold mb-4";
    switch (areaID) {
        case "liked-songs":
            header.textContent = "Liked Songs";
            break;
        case "playlists":
            header.textContent = "Playlists";
            break;
        case "albums":
            header.textContent = "Albums";
            break;
        case "artists":
            header.textContent = "Artists";
            break;
    }
    header.textContent = "Liked Songs";

    // container for preview and more button
    const container = document.createElement("div");
    container.className = "w-fit flex flex-row justify-start items-center";

    const preview = document.createElement("div");

    preview.id = areaID + "-preview";
    preview.className = "flex flex-row justify-start gap-x-4 mr-4";

    const more = document.createElement("button");
    more.type = "button";
    more.className =
        "px-2 h-fit w-16 text-base border-2 border-black rounded-full bg-white hover:bg-green-300";
    more.addEventListener("click", changeContent.bind(areaID, "library"));
    more.textContent = "More";

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
        let song = list[i]; // song json

        const songBox = document.createElement("div");
        songBox.id = "preview-song-" + i;
        songBox.className =
            "h-fit p-2 rounded-lg hover:cursor-pointer hover:bg-green-100";

        if (i > 2) {
            songBox.className += " hidden lg:block";
        } else if (i > 1) {
            songBox.className += " hidden md:block";
        }

        const songCover = document.createElement("img");
        songCover.src = song.image;
        songCover.className = "preview-cover w-full mb-4 rounded";
        songCover.style = "max-width: 12rem;";

        //song info
        const songLabel = document.createElement("div");
        songLabel.className = "whitespace-nowrap";

        //title
        const title = document.createElement("p");
        title.className = "text-base md:text-lg lg:text-xl text-ellipsis overflow-hidden";
        title.textContent = song.title;

        //artist
        const artist = document.createElement("p");
        artist.className =
            "text-sm md:text-base lg:text-lg text-ellipsis overflow-hidden";
        artist.textContent = song.artist;

        songBox.appendChild(songCover);

        songLabel.appendChild(title);
        songLabel.appendChild(artist);
        songBox.appendChild(songLabel);

        // placeholder event listener for playing the song
        songBox.addEventListener("click", () => {
            console.log(song.title + " by " + song.artist);
        });

        preview.appendChild(songBox);
    }

    container.appendChild(preview);
    container.appendChild(more);

    area.appendChild(header);
    area.appendChild(container);
}

loadPreviews("liked-songs");
