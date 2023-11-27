var songsInQueue = [
    { title: 'Jingle Bell Rock',                        artist: 'Brenda Lee',    image: './assets/compact-disc-solid.svg' },
    { title: 'Let It Snow! Let it Snow! Let It Snow!', artist: 'Frank Sinatra', image: './assets/compact-disc-solid.svg' },
    { title: 'Santa Claus Is Coming To Town',           artist: 'The Jackson 5', image: './assets/compact-disc-solid.svg' },
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
}


  function loadSongsInQueue()
  {
      //console.log(songsInQueue)
      var container = document.getElementById('songBoxes');
      
      container.innerHTML = "";
      
      songsInQueue.forEach(song => {
          var songBox = document.createElement("div");
          songBox.className = "flex items-center mb-5 h-20 border-double border-2 hover:cursor-grab hover:border-dashed select-none";
         
          var songImg = document.createElement("img");
          songImg.src = song.image;
          songImg.className = "w-20 h-20 mr-2";
          
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
            var newIndex = evt.newIndex;
            
            // Remove the item from the old position
            var removedSong = songsInQueue.splice(evt.oldIndex, 1)[0];
        
            // Insert the item at the new position
            songsInQueue.splice(newIndex, 0, removedSong);

            //console.log(songsInQueue)
        },
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