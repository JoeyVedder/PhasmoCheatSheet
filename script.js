const searchBar = document.getElementById('searchBar');
const generateGhostButton = document.getElementById('generateGhost');
const randomGhostContainer = document.getElementById('randomGhostContainer');
const responseSection = document.getElementById('responseSection');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const customModal = document.getElementById('customModal');
const modalMessage = document.getElementById('modalMessage');
const closeModalButton = document.getElementById('closeModalButton');
const generateGhostSound = new Audio('sounds/audio_Arrival 1.wav');

// Add search bar functionality
searchBar.addEventListener('input', function () {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const ghostName = row.querySelector('td:first-child').textContent.toLowerCase();
        row.style.display = ghostName.includes(searchBar.value.toLowerCase()) ? '' : 'none';
    });
});

// Generate random ghost functionality
generateGhostButton.addEventListener('click', function () {
    const rows = document.querySelectorAll('tbody tr');
    const randomIndex = Math.floor(Math.random() * rows.length);
    const randomGhost = rows[randomIndex].querySelector('td:first-child').textContent;

    generateGhostSound.play();

    // Display the random ghost
    randomGhostContainer.textContent = `Random Ghost: ${randomGhost}`;
    responseSection.style.display = 'block';
});

yesButton.addEventListener('click', function () {
    document.getElementById('yesSound').play();
    showModal('Good Job, on to the next one.');
    resetGenerator();
});

noButton.addEventListener('click', function () {
    document.getElementById('noSound').play();
    showModal('*DEAD* RIP');
    resetGenerator();
});

closeModalButton.addEventListener('click', function () {
    customModal.classList.add('hidden');
});

function showModal(message) {
    modalMessage.textContent = message;
    customModal.classList.remove('hidden');
}

function resetGenerator() {
    randomGhostContainer.textContent = '';
    responseSection.style.display = 'none';
}

randomGhostContainer.classList.add('show');