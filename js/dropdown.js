document.addEventListener('click', function (e) {
    var dropdown = document.getElementById('myDropdown');
    var dropbtn = document.querySelector('.dropbtn');

    if (!e.target.matches('.dropbtn')) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    } else {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        } else {
            dropdown.classList.add('show');
        }
    }
});
