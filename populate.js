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

function loadPreviews() {
    console.log("loading preview");
    const PREVIEW_SIZE = 5;
    // populate the liked song preview
    const likedSongs = document.getElementById("liked-songs-area");

    const header = document.createElement("h3");
    header.className = "text-3xl font-bold mb-4";
    header.textContent = "Liked Songs";

    // container for preview and more button
    const container = document.createElement("div");
    container.className = "w-fit flex flex-row justify-start items-center";

    const preview = document.createElement("div");
    preview.id = "liked-songs-preview";
    preview.className = "flex flex-row items-start gap-x-4 mr-4";

    const more = document.createElement("button");
    more.type = "button";
    more.className =
        "px-2 h-fit w-16 text-base border-2 border-black rounded-full bg-white hover:bg-green-300";
    more.addEventListener("click", changeContent.bind("liked-songs", "library"));
    more.textContent = "More";

    for (let i = 0; i < Math.min(PREVIEW_SIZE, songList.length); i++) {
        let song = songList[i]; // song jsons

        const songBox = document.createElement("div");
        songBox.id = "preview-song-" + i;
        songBox.className = "w-full p-2 rounded hover:cursor-pointer hover:bg-green-100";

        const songCover = document.createElement("img");
        songCover.src = song.image;
        songCover.className = "library-libraryItem-cover w-28 mb-4 rounded";

        //song info
        const songLabel = document.createElement("div");
        songLabel.className = "library-libraryItem-label w-11/12 whitespace-nowrap";

        //title
        const title = document.createElement("p");
        title.className =
            "libraryItem-labelTitle text-base md:text-lg lg:text-xl text-ellipsis overflow-hidden";
        title.textContent = song.title;

        //artist
        const artist = document.createElement("p");
        artist.className =
            "libraryItem-labelArtist text-sm md:text-base lg:text-lg text-ellipsis overflow-hidden";
        artist.textContent = song.artist;

        songBox.appendChild(songCover);

        songLabel.appendChild(title);
        songLabel.appendChild(artist);
        songBox.appendChild(songLabel);

        preview.appendChild(songBox);
    }

    container.appendChild(preview);
    container.appendChild(more);

    likedSongs.appendChild(header);
    likedSongs.appendChild(container);
}

loadPreviews();
