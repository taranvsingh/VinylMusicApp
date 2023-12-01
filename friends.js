// Fetch data from the JSON file
fetch('friendsData.json')
.then(response => response.json())
.then(data => {
    const friendsGrid = document.getElementById('friends-subsection');

    data.forEach(friend => {
        const friendDiv = document.createElement('div');
        friendDiv.className = 'bg-white p-4 mt-2 rounded-md';

        // Friend information
        const name = document.createElement('h3');
        name.className = 'text-lg font-bold mb-1';
        name.textContent = friend.name;

        const lastPlayed = document.createElement('p');
        lastPlayed.className = 'text-sm text-gray-500 mb-1';
        lastPlayed.textContent = 'Last Played:';

        const songInfo = document.createElement('p');
        songInfo.className = 'text-md text-gray-800 mb-1';
        songInfo.textContent = `${friend.lastPlayed}`;

        const subInfo = document.createElement('p');
        subInfo.className = 'text-sm text-gray-500 mb-1';
        subInfo.textContent = `${friend.artist} - ${friend.album}`;


        // Append elements to the friendDiv
        friendDiv.appendChild(name);
        friendDiv.appendChild(lastPlayed);
        friendDiv.appendChild(songInfo);
        friendDiv.appendChild(subInfo);

        // Append friendDiv to the friendsGrid
        friendsGrid.appendChild(friendDiv);
    });
})
.catch(error => console.error('Error fetching data:', error));

function playSong(songUrl) {
console.log('Playing song:', songUrl);
// Implement your logic to play the song here
}