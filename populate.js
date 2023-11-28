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
