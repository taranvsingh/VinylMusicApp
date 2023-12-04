friends = [
    {
        id: 1,
        name: "Sam",
        lastPlayed: "Heat Wave",
        artist: "Glass Animals",
        album: "Dreamland",
        cover: "path/to/cover1.jpg",
        songUrl: "song1.mp3",
        isActive: 1,
    },
    {
        id: 2,
        name: "Ajay",
        lastPlayed: "Counting Stars",
        artist: "OneRepublic",
        album: "Native",
        cover: "path/to/cover2.jpg",
        songUrl: "song2.mp3",
        isActive: 0,
    },
];

globalUsers = [
    {
        id: 1,
        name: "Sam",
        lastPlayed: "Heat Wave",
        artist: "Glass Animals",
        album: "Dreamland",
        cover: "path/to/cover1.jpg",
        songUrl: "song1.mp3",
        isActive: 1,
    },
    {
        id: 2,
        name: "Ajay",
        lastPlayed: "Counting Stars",
        artist: "OneRepublic",
        album: "Native",
        cover: "path/to/cover2.jpg",
        songUrl: "song2.mp3",
        isActive: 0,
    },
    {
        id: 3,
        name: "Emily",
        lastPlayed: "Dancing in the Moonlight",
        artist: "Toploader",
        album: "Onka's Big Moka",
        cover: "path/to/cover3.jpg",
        songUrl: "song3.mp3",
        isActive: 1,
    },
    {
        id: 4,
        name: "Chris",
        lastPlayed: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        cover: "path/to/cover4.jpg",
        songUrl: "song4.mp3",
        isActive: 1,
    },
    {
        id: 5,
        name: "Sophie",
        lastPlayed: "Watermelon Sugar",
        artist: "Harry Styles",
        album: "Fine Line",
        cover: "path/to/cover5.jpg",
        songUrl: "song5.mp3",
        isActive: 0,
    },
    {
        id: 6,
        name: "Max",
        lastPlayed: "Take Me to Church",
        artist: "Hozier",
        album: "Hozier",
        cover: "path/to/cover6.jpg",
        songUrl: "song6.mp3",
        isActive: 1,
    },
    {
        id: 7,
        name: "Olivia",
        lastPlayed: "Someone You Loved",
        artist: "Lewis Capaldi",
        album: "Divinely Uninspired to a Hellish Extent",
        cover: "path/to/cover7.jpg",
        songUrl: "song7.mp3",
        isActive: 0,
    },
    {
        id: 8,
        name: "Daniel",
        lastPlayed: "Savage Love",
        artist: "Jawsh 685 & Jason Derulo",
        album: "Savage Love",
        cover: "path/to/cover8.jpg",
        songUrl: "song8.mp3",
        isActive: 1,
    },
    {
        id: 9,
        name: "Ella",
        lastPlayed: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        cover: "path/to/cover9.jpg",
        songUrl: "song9.mp3",
        isActive: 0,
    },
    {
        id: 10,
        name: "Alex",
        lastPlayed: "Shape of You",
        artist: "Ed Sheeran",
        album: "÷",
        cover: "path/to/cover10.jpg",
        songUrl: "song10.mp3",
        isActive: 1,
    },
];

const friendsGrid = document.getElementById("friends-subsection");
let totalActiveFriends = 0;

function hideNotif() {
    notification.classList.add("hidden");
}

function notify(message) {
    notification.textContent = message;
    notification.classList.remove("hidden");
    setTimeout(hideNotif, 2000);
}

function renderActiveCount() {
    totalActiveFriends = 0;
    friends.forEach((friend) => {
        if (friend.isActive) {
            totalActiveFriends++;
        }
    });
    const activeCountElement = document.getElementById("active-users-count");
    activeCountElement.textContent = totalActiveFriends;
}
function renderFriends() {
    friendsGrid.innerHTML = "";

    friends.forEach((friend) => {
        const friendDiv = document.createElement("div");
        const nameDiv = document.createElement("div");
        const songInfoDiv = document.createElement("div");
        const leftContainerDiv = document.createElement("div");

        friendDiv.className = "bg-white p-4 mt-2 rounded-md";

        // Friend information
        const name = document.createElement("h3");
        name.className = "text-lg font-bold";
        name.textContent = friend.name;

        const isActiveIcon = document.createElement("i");

        isActiveIcon.setAttribute("data-feather", "circle");
        isActiveIcon.setAttribute("color", "green");
        isActiveIcon.setAttribute("height", "10px");
        isActiveIcon.classList.add(friend.isActive ? "fill-green-500" : "no-fill");

        const deleteFriendContainer = document.createElement("button");
        const deleteFriendIcon = document.createElement("i");

        deleteFriendIcon.setAttribute("data-feather", "x");
        deleteFriendIcon.setAttribute("color", "red");

        const songCover = document.createElement("img");
        songCover.src = "/assets/compact-disc-solid.png";
        songCover.alt = "Song Cover";

        const lastPlayed = document.createElement("p");
        lastPlayed.className = "text-sm text-gray-500 mb-1";
        lastPlayed.textContent = "Last Played:";

        const songInfo = document.createElement("p");
        songInfo.className = "text-md text-gray-800 mb-1";
        songInfo.textContent = `${friend.lastPlayed}`;

        const subInfo = document.createElement("p");
        subInfo.className = "text-sm text-gray-500 mb-1";
        subInfo.textContent = `${friend.artist} - ${friend.album}`;

        if (!friend.isActive) {
            isActiveIcon.classList.add("hidden");
        }

        deleteFriendContainer.appendChild(deleteFriendIcon);
        nameDiv.appendChild(deleteFriendContainer);
        nameDiv.appendChild(name);
        nameDiv.appendChild(isActiveIcon);
        songInfoDiv.appendChild(lastPlayed);
        songInfoDiv.appendChild(songInfo);
        songInfoDiv.appendChild(subInfo);

        leftContainerDiv.appendChild(nameDiv);
        leftContainerDiv.appendChild(songInfoDiv);

        friendDiv.appendChild(leftContainerDiv);
        friendDiv.appendChild(songCover);

        // Append friendDiv to the friendsGrid
        friendsGrid.appendChild(friendDiv);
        nameDiv.classList.add("flex", "items-ceter");
        deleteFriendIcon.classList.add(
            "mr-4",
            "cursor-pointer",
            "border-2",
            "border-red-500",
            "hover:bg-red-200"
        );
        friendDiv.classList.add(
            "flex",
            "items-center",
            "justify-between",
            "max-w-md",
            "shadow-md"
        );
        songCover.classList.add("w-20", "rounded-full", "max-h-20");

        renderActiveCount();
        deleteFriendContainer.addEventListener("click", function (event) {
            deleteFriend(friend.id);
            renderActiveCount();
        });

        feather.replace(); // Set feather icons
    });
}

function deleteFriend(friendId) {
    friends.filter((friend) => {
        if (friend.id == friendId) {
            notify(`Removed ${friend.name} from Friends list`);
        }
    });
    friends = friends.filter((friend) => friend.id !== friendId);
    renderFriends();
}

let id = 3;

function addFriend() {
    const friendSearchInput = document.getElementById("friend-search");
    let friendName = friendSearchInput.value.trim();

    // Check if friendName is empty or contains non-alphabetic characters
    if (friendName === '' || containsNonAlphabetic(friendName)) {
        // Handle invalid input (you can display an error message or simply exit)
        console.log("Invalid input");
        return;
    }

    const userToAddById = globalUsers.find((user) => user.id === id);

    id++;
    userToAddById.name = friendName;
    friends.push(userToAddById);
    console.log(friends);
    renderFriends();
}

// Function to check if a string contains non-alphabetic characters
function containsNonAlphabetic(str) {
    const nonAlphabeticRegex = /[^a-zA-Z]/;
    return nonAlphabeticRegex.test(str);
}

renderFriends();
