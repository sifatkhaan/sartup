
// Toggle Mobile Menu
// const menuButton = document.getElementById('mobile-menu-button');
// const mobileMenu = document.getElementById('mobile-menu');
// menuButton.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
// });

//preloader
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader").style.display = "none";
    const content = document.getElementById("content").style.display = "block";
    const minPreloaderTime = 4000;
    const startTime = new Date().getTime();
    const loadTime = new Date().getTime() - startTime;
    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
    }, Math.max(minPreloaderTime - loadTime, 0));

});
//carousel
$(document).ready(function () {
    $('.about-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        //   dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // md screen (768px and above)
                settings: {
                    slidesToShow: 2,  // Show 2 slides on md screens and above
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640, // mobile screen (640px and below)
                settings: {
                    slidesToShow: 1,  // Show 1 slide on small screens
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.service-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        //   dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // md screen (768px and above)
                settings: {
                    slidesToShow: 3,  // Show 2 slides on md screens and above
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640, // mobile screen (640px and below)
                settings: {
                    slidesToShow: 1,  // Show 1 slide on small screens
                    slidesToScroll: 1
                }
            }
        ]
    });
});
//pricing
$(document).ready(function () {
    $('.pricing-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        //   dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // md screen (768px and above)
                settings: {
                    slidesToShow: 3,  // Show 2 slides on md screens and above
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640, // mobile screen (640px and below)
                settings: {
                    slidesToShow: 1,  // Show 1 slide on small screens
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        //   dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // md screen (768px and above)
                settings: {
                    slidesToShow: 3,  // Show 2 slides on md screens and above
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640, 
                settings: {
                    slidesToShow: 1,  // Show 1 slide on small screens
                    slidesToScroll: 1
                }
            }
        ]
    });
});
//button click slide
$('.fa-circle-left').click(function () {
    $('.testimonial-slider').slick('slickPrev');
});

$('.fa-circle-right').click(function () {
    $('.testimonial-slider').slick('slickNext');
});

fetch('src/component/footer.html').then(response=> response.text()).then(data=>{
    document.getElementById('footer').innerHTML = data
});


//chat box
const chatButton = document.getElementById('chatButton');
const chatBox = document.getElementById('chat-box');

chatButton.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
});
// drwaer


    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    // menuButton.addEventListener('click', () => {
    //     // Toggle the menu drawer
    //     mobileMenu.classList.toggle('translate-x-full');
    //     mobileMenu.classList.toggle('translate-x-0');
    //     mobileMenu.classList.toggle('hidden');
    // });

    // closeMenuButton.addEventListener('click', () => {
    //     mobileMenu.classList.add('translate-x-full');
    //     setTimeout(() => {
    //         mobileMenu.classList.add('hidden'); 
    //     }, 400);
    // });


// Open the drawer
menuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden', 'slide-out');
        mobileMenu.classList.add('slide-in');
    }
});

// Close the drawer
closeMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('slide-in')) {
        mobileMenu.classList.remove('slide-in');
        mobileMenu.classList.add('slide-out');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 500); // Match this timeout with the animation duration
    }
});

