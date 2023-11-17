function changeContent(option) {
    // Subsections
    const librarySubsection = document.getElementById("library-subsection");
    const friendsSubsection = document.getElementById("friends-subsection");
    const settingsSubsection = document.getElementById("settings-subsection");
    const songGrid = document.getElementById("song-grid");
    const playlistsSubsection = document.getElementById("playlists-subsection");
    const albumsSubsection = document.getElementById("albums-subsection");
    const artistsSubsection = document.getElementById("artists-subsection");

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

    // Hide all subsections by default
    librarySubsection.classList.add("hidden");
    friendsSubsection.classList.add("hidden");
    settingsSubsection.classList.add("hidden");
    songGrid.classList.add("hidden");
    playlistsSubsection.classList.add("hidden");
    albumsSubsection.classList.add("hidden");
    artistsSubsection.classList.add("hidden");

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

    // Show the corresponding subsection based on the selected option
    switch (option) {
        case "library":
            libraryHeader.classList.remove("hidden");
            librarySubsection.classList.remove("hidden");
            libraryButton.classList.add("bg-white", "text-black");
            break;
        case "friends":
            friendsHeader.classList.remove("hidden");
            friendsSubsection.classList.remove("hidden");
            friendsButton.classList.add("bg-white", "text-black");
            break;
        case "settings":
            settingsHeader.classList.remove("hidden");
            settingsSubsection.classList.remove("hidden");
            settingsButton.classList.add("bg-white", "text-black");
            break;
        case "liked-songs":
            songGrid.classList.remove("hidden");
            likedSongsHeader.classList.remove("hidden");
            break;
        case "playlists":
            playlistsSubsection.classList.remove("hidden");
            playlistsHeader.classList.remove("hidden");
            break;
        case "playlist":
            songGrid.classList.remove("hidden");
            playlistHeader.classList.remove("hidden");
            break;
        case "albums":
            albumsSubsection.classList.remove("hidden");
            albumsHeader.classList.remove("hidden");
            break;
        case "album":
            songGrid.classList.remove("hidden");
            albumHeader.classList.remove("hidden");
            break;
        case "artists":
            artistsSubsection.classList.remove("hidden");
            artistsHeader.classList.remove("hidden");
            break;
        case "artist":
            albumsSubsection.classList.remove("hidden");
            artistHeader.classList.remove("hidden");
            break;
    }
}

// Intitial state
libraryButton.classList.add("bg-white", "text-black");
