var songList = [
    /* 
    { title: str, artist: str, image: str}
    */
    { title: "Jingle Bell Rock", artist: "Brenda Lee", image: "./assets/song-cover.jpg" },
    {
        title: "Let It Snow! Let it Snow! Let It Snow! ",
        artist: "Frank Sinatra",
        image: "./assets/song-cover.jpg",
    },
    {
        title: "Santa Claus Is Coming To Town",
        artist: "The Jackson 5",
        image: "./assets/song-cover.jpg",
    },
];

function loadSongsInLibrary() {
    const songGrid = document.getElementById("song-grid");

    i = 0;
    songList.forEach((song) => {
        const songBox = document.createElement("div");
        songBox.id = "grid-song-" + i;
        i++;
        songBox.className =
            "grid-song w-5/6 md:w-full p-2 rounded hover:cursor-pointer hover:bg-green-100";

        const songCover = document.createElement("img");
        songCover.src = song.image;
        songCover.className = "w-full mb-4 rounded";

        //song info
        const songLabel = document.createElement("div");
        songLabel.className = "w-11/12 whitespace-nowrap overflow-hidden";

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

        songGrid.appendChild(songBox);
    });
}

loadSongsInLibrary();
