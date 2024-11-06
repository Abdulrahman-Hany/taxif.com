const header = document.querySelector("header");
function checkStickyHeader() {
    header.classList.toggle("sticky", window.scrollY > 160);
}
window.addEventListener("scroll", checkStickyHeader);
window.addEventListener("load", checkStickyHeader);

// Select all links within the list
const navLinks = document.querySelectorAll('.navlinks a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

let menu = document.querySelector('.h-right .bx-menu i');
let navlinks = document.querySelector('.navlinks');

menu.onclick = () => {
    navlinks.classList.toggle('open');

    if (menu.classList.contains('fa-bars-staggered')) {
        menu.classList.remove('fa-bars-staggered');
        menu.classList.add('fa-xmark');
    } else {
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars-staggered');
    }
};

window.onscroll = () => {
    navlinks.classList.remove('open');
    
    if (menu.classList.contains('fa-xmark')) {
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars-staggered');
    }
};

// ==========> ScrollReveal <==========
let animate = ScrollReveal({
    origin: 'top',
    distance: '65px', 
    duration: 2600,
    delay: 400,
    mobile: true 
});

animate.reveal(".home-text,.about-img,.feature-left,.social-icons,.container-social .right,.container-social.left .card-social", { 
    origin: "left"
});

animate.reveal(".arrow,.about-text,.services-section h2,.services-section h3,.feature-right,.container-social .left,.container-social.right .card-social", { 
    origin: "right"
});

animate.reveal(".home-img,.text-center,.service-card,.feature-middle img", { 
    interval: 150
});

if (window.innerWidth <= 768) {
    animate.reveal(".home-text,.about-img,.feature-left,.social-icons,.container-social .right,.container-social.left .card-social", { 
        distance: '10px', 
        origin: "left"
    });

    animate.reveal(".arrow,.about-text,.services-section h2,.services-section h3,.feature-right,.container-social .left,.container-social.right .card-social", { 
        distance: '10px', 
        origin: "right"
    });

    animate.reveal(".home-img,.text-center,.service-card,.feature-middle img", { 
        interval: 60 
    });
}
