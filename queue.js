var songsInQueue = [
    { title: 'Jingle Bell Rock',                        artist: 'Brenda Lee',    image: './assets/compact-disc-solid.svg' },
    { title: 'Let It Snow! Let it Snow! Let It Snow! ', artist: 'Frank Sinatra', image: './assets/compact-disc-solid.svg' },
    { title: 'Santa Claus Is Coming To Town',           artist: 'The Jackson 5', image: './assets/compact-disc-solid.svg' },
  ];

  function goToHomePage()
  {
      alert("Going to Home Page")
  }

  function loadSongsInQueue()
  {
      var container = document.getElementById('songBoxes');
      container.innerHTML = "";
  
      songsInQueue.forEach(song => {
          var songBox = document.createElement("div");
          songBox.className = "flex items-center mb-5 h-20 border-2 hover:cursor-grab mr-4 select-none";
         
          var songImg = document.createElement("img");
          songImg.src = song.image;
          songImg.className = "w-20 h-20 mr-2";
          
          //song info
          var songInfo = document.createElement('div');
          songInfo.className = "w-5/6 whitespace-nowrap overflow-hidden"

          //title
          var title = document.createElement('p');
          title.className = ' font-semibold text-xs md:text-sm lg:text-base text-ellipsis overflow-hidden' ;
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

      
  }

  function clickedClear()
  {
      songsInQueue = [];
      loadSongsInQueue();
  }

  function addSongs(song)
  {
      songsInQueue.push(song)
      loadSongsInQueue();
  }
  

  loadSongsInQueue();