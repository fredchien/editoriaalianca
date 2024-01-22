
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflowY = "hidden";
});

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
let mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
/* Panels */
const cont = document.querySelector("#panels-container");
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
  x: () => -1 * (cont.scrollWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    end: () => "+=" + (cont.scrollWidth - innerWidth),
  }
});

const cont1 = document.querySelector("#panels-container-1");
const panels1 = gsap.utils.toArray("#panels-container-1 .panel");
tween = gsap.to(panels1, {
  x: () => -1 * (cont1.scrollWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container-1",
    pin: true,
    start: "top top",
    scrub: 1,
    end: () => "+=" + (cont1.scrollWidth - innerWidth),
  }
});

const teste = document.querySelector("#estudio");
gsap.to(teste, {
  scrollTrigger: {
    trigger: "#estudio",
    start: "top top",
    scrub: 1,
    markers: false,
    // pin: true,
    end: () => "+=900",
    onEnter: () => {
      // $('.test').removeClass('d-none');
      // showImage()
    }
  }
})

gsap.utils.toArray('#estudio').forEach((section, index) => {
const w = section.querySelector('.wrapper');
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, {  x  }, {
      x: xEnd,
      scrollTrigger: { 
        trigger: section, 
        scrub: 0.5 
      }
  });
});

gsap.utils.toArray('#escola').forEach((section, index) => {
const w = section.querySelector('.wrapper');
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, {  x  }, {
      x: xEnd,
      scrollTrigger: { 
        trigger: section, 
        scrub: 0.5 
      }
  });
});

gsap.utils.toArray('.demo-gallery').forEach((section, index) => {
const w = section.querySelector('.wrapper');
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, {  x  }, {
      x: xEnd,
      scrollTrigger: { 
        trigger: section, 
        // start: "bottom bottom",
        scrub: 0.5
      }
  });
});

});


  function clickQuiz(quizNumber){
      var quiz = document.getElementById('box-'+quizNumber);
      quiz?.classList.remove('active');
      
      var nextQuiz = 'box-' + (quizNumber + 1);

      var addToNext = quiz = document.getElementById(nextQuiz);
      addToNext?.classList.add('active');
  }

  $(document).ready(function() {
    $(document).on("scroll", onScroll);
});
let passTosection = false;
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.menu-side a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        if(!passTosection && refElement.selector === '#quiz'){
            document.body.style.overflowY = "hidden";
            passTosection = true;
            document.getElementById('nav-menu').classList.add('d-none');
        }else{
          document.body.style.overflowY = "auto";
          document.getElementById('nav-menu').classList.remove('d-none');
        }
      $('.menu-side a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

  var rellax = new Rellax('.rellax', {
    center: true,
    wrapper:'.par',
    relativeToWrapper: true,
    speed: -2,
    round: false,
      vertical: true,
      horizontal: false,
  });
  window.addEventListener('scroll', function () {
    rellax.refresh()
  })

  $(document).ready(function(){
    $('.carossel-team').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
    })
    $('.carossel-projects').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['', ''],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    })
    $('.carossel-depoimentos').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText: ['', ''],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
      })
  });

   window.addEventListener("load", function (event) {

    const page = document.getElementById('load-page');
    page.classList.add('open');

    setTimeout(() => {
      page.classList.add('d-none');
      document.body.style.overflowY = "auto";
    }, 1000)
  });

  var video = document.getElementById("myVideo");
  var btn = document.getElementById("play-video");
  
  function playPause() {
    if (video.paused) {
      video.play();
      btn.classList.add('d-none')
    } else {
      video.pause();
      btn.classList.remove('d-none')
    }
  }

  var videoXavier = document.getElementById("myVideoXavier");
  var btnXavier = document.getElementById("play-xavier");
  
  function playPauseXavier() {
    if (videoXavier.paused) {
      videoXavier.play();
      btnXavier.classList.add('d-none')
    } else {
      videoXavier.pause();
      btnXavier.classList.remove('d-none')
    }
  }

  var videoAline = document.getElementById("videoAline");
  var btnAline = document.getElementById("play-aline");
  
  function playPauseAline() {
    if (videoAline.paused) {
      videoAline.play();
      btnAline.classList.add('d-none')
    } else {
      videoAline.pause();
      btnAline.classList.remove('d-none')
    }
  }

  // var left = document.getElementById('left');
  // var right = document.getElementById('right');
  // var poster = document.getElementById('myVideo');
  // var nameVideo = document.getElementById('name-video');
  // function changeVideo(type){
  //   if(type === 'right'){
  //     right.style.opacity = '0';
  //     left.style.opacity = '1';
  //     poster.setAttribute('poster','./assets/img/xavier.png');
  //     poster.src = './assets/video/rain.mp4';
  //     nameVideo.innerHTML = 'Felipe Xavier';

  //   }else{
  //     right.style.opacity = '1';
  //     left.style.opacity = '0';
  //     poster.setAttribute('poster','./assets/img/mateus.png');
  //     poster.src = './assets/video/matheus-braga.mp4';
  //     nameVideo.innerHTML = 'Matheus Braga';
  //   }
  // }

  // var videoHack = document.getElementById("video-hack");
  // var btnHack = document.getElementById("play-hack");
  
  // function playPauseHack() {
  //   if (videoHack.paused) {
  //     videoHack.play();
  //     btnHack.classList.add('d-none')
  //   } else {
  //     videoHack.pause();
  //     btnHack.classList.remove('d-none')
  //   }
  // }

  // menu toggle
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#header").toggleClass("open");
    $(".sub-menu").toggleClass("open");
    if (!$("#header").hasClass("open"))
      $("#header nav.sub-menu").removeClass("open");
  });

  function closeMenu(){
    $("#header").toggleClass("open");
    $(".sub-menu").toggleClass("open");
  }