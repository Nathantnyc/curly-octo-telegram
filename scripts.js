// Sort table function
function sortTable(columnIndex, ascending) {
    const table = document.querySelector('#sheet1-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
        const cellA = rowA.querySelectorAll('td')[columnIndex].textContent.trim();
        const cellB = rowB.querySelectorAll('td')[columnIndex].textContent.trim();

        if (ascending) {
            return cellA.localeCompare(cellB);
        } else {
            return cellB.localeCompare(cellA);
        }
    });

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    rows.forEach(row => {
        tbody.appendChild(row);
    });
}

// Event listener for table header clicks to sort columns
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('#sheet1-table th');
    headers.forEach((header, index) => {
        header.addEventListener('click', function() {
            const isAscending = !this.classList.contains('sorted');
            headers.forEach(h => h.classList.remove('sorted'));
            this.classList.toggle('sorted');
            sortTable(index, isAscending);
        });
    });
});