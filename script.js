function changeContent(option) {
    // Hide all subsections by default
    document.getElementById('library-subsection').classList.add('hidden');
    document.getElementById('friends-subsection').classList.add('hidden');
    document.getElementById('settings-subsection').classList.add('hidden');
    
    document.getElementById('library-bar').classList.add('hidden');
    document.getElementById('friends-bar').classList.add('hidden');
    document.getElementById('settings-bar').classList.add('hidden');

    document.getElementById('library-button').classList.remove('bg-white', 'text-black');
    document.getElementById('friends-button').classList.remove('bg-white', 'text-black');
    document.getElementById('settings-button').classList.remove('bg-white', 'text-black');

    // Show the corresponding subsection based on the selected option
    switch (option) {
        case 'library':
            document.getElementById('library-bar').classList.remove('hidden');
            document.getElementById('library-subsection').classList.remove('hidden');
            document.getElementById('library-button').classList.add('bg-white', 'text-black');
            break;
        case 'friends':
            document.getElementById('friends-bar').classList.remove('hidden');
            document.getElementById('friends-subsection').classList.remove('hidden');
            document.getElementById('friends-button').classList.add('bg-white', 'text-black');
            break;
        case 'settings':
            document.getElementById('settings-bar').classList.remove('hidden');
            document.getElementById('settings-subsection').classList.remove('hidden');
            document.getElementById('settings-button').classList.add('bg-white', 'text-black');
            break;
    }
}

// Intitial state
document.getElementById('library-button').classList.add('bg-white', 'text-black');
