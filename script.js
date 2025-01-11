searchBar.addEventListener('input', function () {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const ghostName = row.querySelector('td:first-child').textContent.toLowerCase();
        row.style.display = ghostName.includes(searchBar.value.toLowerCase()) ? '' : 'none';
    });
});
