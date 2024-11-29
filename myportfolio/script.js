let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Select all sections
let navLinks = document.querySelectorAll('header nav a'); // Select all nav links

window.onscroll = () => {
    let top = window.scrollY; // Get the current scroll position
 
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Offset calculation
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Correctly get the ID

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
            });
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active'); // Add active class to the current section link
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
