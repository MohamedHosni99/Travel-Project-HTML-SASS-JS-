
// Navbar Responsive
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = function(){
    navbar.classList.toggle('active');
};

//Video Controler
let controls = document.querySelectorAll(".video-container .controls span");
let video = document.querySelector('.video-container video');


controls.forEach((span) => {
    span.addEventListener("click", (e) => {
        //Remove Active Class from All Elements
        controls.forEach((span) => {
            span.classList.remove("active");
        });

        // Add Active Class To Current Element
        e.currentTarget.classList.add("active");

        //Change Video Source
        video.src = e.currentTarget.dataset.src;
        
    });
});
